import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BoomerangVideoBgProps {
  src: string;
  poster?: string;
  className?: string;
  isActive?: boolean;
}

/**
 * BoomerangVideoBg
 *
 * Implements smooth hardware-driven boomerang video playback:
 * 1. Stores captured frames as ImageBitmap using createImageBitmap(video, { resizeWidth: 720, resizeQuality: 'medium' }).
 * 2. Captures with requestVideoFrameCallback (falling back to rAF), skips identical mediaTime, caps at 180 frames.
 * 3. Uses a single display canvas with getContext('2d', { alpha: false, desynchronized: true }).
 * 4. Drives playback from elapsed time using a ping-pong index idx = Math.floor((now - start) / (1000 / 30)) % (2N - 2).
 * 5. Keeps <video> visible until all bitmaps are ready, then smoothly swaps to canvas.
 * 6. On unmount, cancels rAF and calls bitmap.close() on all captured frames to prevent leaks.
 */
export function BoomerangVideoBg({
  src,
  poster,
  className,
  isActive = true,
}: BoomerangVideoBgProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let destroyed = false;
    let animId: number | null = null;
    let rvfcId: number | null = null;
    let lastMediaTime = -1;
    const framePromises: Promise<ImageBitmap>[] = [];
    let bitmaps: ImageBitmap[] = [];

    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });

    // Capture frames while video plays forward
    const captureFrame = (now: DOMHighResTimeStamp, metadata?: VideoFrameCallbackMetadata) => {
      if (destroyed) return;
      const mediaTime = metadata?.mediaTime ?? video.currentTime;

      if (mediaTime !== lastMediaTime && framePromises.length < 180) {
        lastMediaTime = mediaTime;
        if (video.videoWidth > 0 && video.videoHeight > 0) {
          const promise = createImageBitmap(video, {
            resizeWidth: 720,
            resizeQuality: "medium",
          }).catch(() => null as unknown as ImageBitmap);
          framePromises.push(promise);
        }
      }

      if ("requestVideoFrameCallback" in video && !video.ended && framePromises.length < 180) {
        rvfcId = video.requestVideoFrameCallback((n, m) => captureFrame(n, m));
      } else if (!video.ended && framePromises.length < 180) {
        animId = requestAnimationFrame((t) => captureFrame(t));
      }
    };

    const startCapture = () => {
      if (destroyed) return;
      if ("requestVideoFrameCallback" in video) {
        rvfcId = video.requestVideoFrameCallback((n, m) => captureFrame(n, m));
      } else {
        animId = requestAnimationFrame((t) => captureFrame(t));
      }
    };

    const handleEnded = async () => {
      if (destroyed) return;
      const resolved = await Promise.all(framePromises);
      bitmaps = resolved.filter((b): b is ImageBitmap => Boolean(b));

      if (destroyed) {
        bitmaps.forEach((b) => b.close());
        return;
      }

      const N = bitmaps.length;
      const firstFrame = bitmaps[0];
      if (N < 2 || !firstFrame || !ctx) {
        // Fallback: loop video if capture failed
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }

      // Configure canvas to match first frame dimensions
      canvas.width = firstFrame.width;
      canvas.height = firstFrame.height;

      setIsCanvasReady(true);
      video.pause();

      const startTime = performance.now();
      const frameDuration = 1000 / 30; // 30 FPS playback
      const period = 2 * N - 2;

      const loop = (currentTime: DOMHighResTimeStamp) => {
        if (destroyed) return;
        const elapsed = currentTime - startTime;
        const step = Math.floor(elapsed / frameDuration) % period;
        const idx = step < N ? step : period - step;

        const frame = bitmaps[idx];
        if (frame && ctx) {
          ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
        }

        animId = requestAnimationFrame(loop);
      };

      animId = requestAnimationFrame(loop);
    };

    video.addEventListener("play", startCapture);
    video.addEventListener("ended", handleEnded);

    // Initial play trigger
    video.play().catch(() => {});

    return () => {
      destroyed = true;
      video.removeEventListener("play", startCapture);
      video.removeEventListener("ended", handleEnded);

      if (rvfcId !== null && "cancelVideoFrameCallback" in video) {
        video.cancelVideoFrameCallback(rvfcId);
      }
      if (animId !== null) {
        cancelAnimationFrame(animId);
      }

      // Close all allocated ImageBitmaps immediately
      bitmaps.forEach((b) => {
        try {
          b.close();
        } catch {
          // ignore already closed
        }
      });
    };
  }, [src]);

  return (
    <div className={cn("pointer-events-none relative size-full overflow-hidden", className)}>
      {/* Native video plays forward during capture or as native fallback */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload={isActive ? "metadata" : "none"}
        className={cn(
          "size-full object-cover transition-opacity duration-300",
          isCanvasReady ? "opacity-0" : "opacity-100",
        )}
      />

      {/* Hardware-accelerated desynchronized 2D canvas for jitter-free ping-pong */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-300",
          isCanvasReady ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
