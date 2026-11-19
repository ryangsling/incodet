import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv, type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

function readLocalEnvOverrides(cwd: string): Record<string, string> {
  const localPath = path.join(cwd, ".env.local");
  if (!fs.existsSync(localPath)) return {};
  const out: Record<string, string> = {};
  for (const rawLine of fs.readFileSync(localPath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eqIdx = line.indexOf("=");
    if (eqIdx <= 0) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key && val) out[key] = val;
  }
  return out;
}

export default defineConfig(({ command, mode }) => {
  const isDevBuild = command === "build" && mode === "development";

  // Load server-only env vars from .env / .env.local in dev serve mode (never into client define).
  if (command === "serve") {
    const fileEnv = {
      ...loadEnv(mode, process.cwd(), ""),
      ...readLocalEnvOverrides(process.cwd()),
    };
    for (const [key, value] of Object.entries(fileEnv)) {
      if (!key.startsWith("VITE_") && value) {
        process.env[key] = value;
      }
    }
  }

  // Expose VITE_* variables to client and server code as import.meta.env.*
  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const config: UserConfig = {
    plugins: [
      tailwindcss(),
      tanstackStart({
        // Server-only code must never be bundled into the browser.
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
        // Use src/server.ts (our SSR error wrapper) as the server entry. Nitro builds from it.
        server: { entry: "server" },
      }),
      // Nitro builds the deployable server. Default target is Cloudflare;
      // set NITRO_PRESET (for example NITRO_PRESET=vercel) to build for another host.
      ...(command === "build"
        ? [
            nitro({
              defaultPreset: "cloudflare-module",
              // keep_vars: plaintext vars set on the Worker are not wiped by later deploys.
              cloudflare: { wrangler: { name: "incodet", keep_vars: true } },
            }),
          ]
        : []),
      viteReact(),
    ],
    define: envDefine,
    css: { transformer: "lightningcss" },
    resolve: {
      // Vite resolves tsconfig "paths" natively (replaces the vite-tsconfig-paths plugin).
      tsconfigPaths: true,
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      allowedHosts: true,
      watch: {
        awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 },
        // Build output is rewritten by `bun run build`; watching it crashes the dev server on Windows.
        ignored: ["**/.output/**", "**/.vercel/**", "**/.wrangler/**", "**/.tanstack/tmp/**"],
      },
    },
  };

  if (isDevBuild) {
    config.environments = {
      client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
    };
    config.esbuild = { keepNames: true };
  }

  return config;
});
