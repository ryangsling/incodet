import { useEffect, useRef, useState } from "react";
import { deliverySteps } from "@/content/process";
import { loadScrollMotion } from "@/lib/scroll-motion";
import { cn } from "@/lib/utils";

function StepIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.6991 32.8345C29.5503 31.0109 31.0596 29.4884 32.8675 29.6385C33.1809 29.6645 33.5562 29.7786 33.9384 29.8948C33.9752 29.9059 34.0121 29.9172 34.049 29.9283C34.0823 29.9384 34.1157 29.9484 34.149 29.9584C34.5002 30.064 34.8496 30.169 35.1153 30.3126C36.6407 31.1365 37.1331 33.1053 36.1777 34.5606C36.0113 34.8141 35.7532 35.0737 35.4936 35.3347C35.469 35.3595 35.4444 35.3843 35.4198 35.4091C35.3952 35.4339 35.3706 35.4588 35.3461 35.4836C35.0873 35.7454 34.8299 36.0058 34.5786 36.1737C33.1359 37.1374 31.1841 36.6407 30.3673 35.1019C30.225 34.8339 30.1209 34.4815 30.0162 34.1272C30.0063 34.0936 29.9963 34.06 29.9864 34.0264C29.9753 33.9891 29.9642 33.9519 29.9531 33.9148C29.8379 33.5293 29.7249 33.1507 29.6991 32.8345Z"
            fill="currentColor"
          />
          <path
            d="M33.5463 18.5717C33.5463 26.9875 26.7829 33.8098 18.4398 33.8098C10.0967 33.8098 3.33331 26.9875 3.33331 18.5717C3.33331 10.1559 10.0967 3.3335 18.4398 3.3335C26.7829 3.3335 33.5463 10.1559 33.5463 18.5717Z"
            fill="currentColor"
          />
        </svg>
      );
    case 1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1782 7.09302C12.6265 4.93166 10.6665 3.3335 8.33331 3.3335C5.57189 3.3335 3.33331 5.57207 3.33331 8.3335C3.33331 10.6667 4.93147 12.6267 7.09284 13.1784C7.08655 13.2292 7.08331 13.281 7.08331 13.3335V26.6668C7.08331 26.7193 7.08656 26.7711 7.09284 26.8219C4.93148 27.3736 3.33331 29.3336 3.33331 31.6668C3.33331 34.4283 5.57189 36.6668 8.33331 36.6668C10.6665 36.6668 12.6265 35.0687 13.1782 32.9073C13.229 32.9136 13.2808 32.9168 13.3333 32.9168H26.6666C26.7192 32.9168 26.7709 32.9136 26.8217 32.9073C27.3735 35.0687 29.3334 36.6668 31.6666 36.6668C34.4281 36.6668 36.6666 34.4283 36.6666 31.6668C36.6666 29.3336 35.0685 27.3736 32.9071 26.8219C32.9134 26.7711 32.9166 26.7193 32.9166 26.6668V13.3335C32.9166 13.281 32.9134 13.2292 32.9071 13.1784C35.0685 12.6267 36.6666 10.6667 36.6666 8.3335C36.6666 5.57207 34.4281 3.3335 31.6666 3.3335C29.3334 3.3335 27.3735 4.93166 26.8217 7.09303C26.7709 7.08674 26.7192 7.0835 26.6666 7.0835H13.3333C13.2808 7.0835 13.229 7.08674 13.1782 7.09302ZM9.57379 13.1784C9.58007 13.2292 9.58331 13.281 9.58331 13.3335L9.58331 26.6668C9.58331 26.7193 9.58007 26.7711 9.57378 26.8219C11.3385 27.2724 12.7278 28.6616 13.1782 30.4264C13.229 30.4201 13.2808 30.4168 13.3333 30.4168H26.6666C26.7192 30.4168 26.7709 30.4201 26.8217 30.4264C27.2722 28.6616 28.6615 27.2724 30.4262 26.8219C30.4199 26.7711 30.4166 26.7193 30.4166 26.6668V13.3335C30.4166 13.281 30.4199 13.2292 30.4262 13.1784C28.6615 12.7279 27.2722 11.3387 26.8217 9.57397C26.7709 9.58025 26.7192 9.5835 26.6666 9.5835H13.3333C13.2808 9.5835 13.229 9.58026 13.1782 9.57397C12.7278 11.3387 11.3385 12.7279 9.57379 13.1784Z"
            fill="currentColor"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.798 3.58723C23.1808 3.3335 22.3983 3.3335 20.8333 3.3335C19.2684 3.3335 18.4859 3.3335 17.8687 3.58723C17.0457 3.92554 16.3918 4.57446 16.0509 5.39122C15.8953 5.76406 15.8344 6.19766 15.8106 6.83015C15.7756 7.75963 15.2953 8.61999 14.4836 9.08505C13.672 9.5501 12.6811 9.53273 11.8525 9.09809C11.2886 8.80233 10.8798 8.63787 10.4766 8.58519C9.59348 8.4698 8.7003 8.70732 7.99359 9.2455C7.46356 9.64913 7.07232 10.3217 6.28984 11.6667C5.50736 13.0118 5.11612 13.6843 5.02891 14.3417C4.91264 15.2182 5.15197 16.1046 5.69424 16.806C5.94176 17.1261 6.28962 17.3952 6.82951 17.7319C7.62319 18.2268 8.13387 19.0699 8.13382 20.0002C8.13377 20.9304 7.62311 21.7734 6.8295 22.2682C6.28953 22.605 5.94162 22.8741 5.69408 23.1943C5.1518 23.8956 4.91248 24.782 5.02875 25.6585C5.11595 26.3159 5.50719 26.9884 6.28967 28.3335C7.07216 29.6786 7.4634 30.3511 7.99343 30.7547C8.70014 31.2929 9.59332 31.5304 10.4765 31.415C10.8796 31.3623 11.2884 31.1979 11.8522 30.9022C12.6809 30.4675 13.6718 30.4501 14.4835 30.9152C15.2952 31.3803 15.7756 32.2407 15.8106 33.1703C15.8344 33.8027 15.8953 34.2363 16.0509 34.6091C16.3918 35.4259 17.0457 36.0748 17.8687 36.4131C18.4859 36.6668 19.2684 36.6668 20.8333 36.6668C22.3983 36.6668 23.1808 36.6668 23.798 36.4131C24.621 36.0748 25.2748 35.4259 25.6157 34.6091C25.7714 34.2362 25.8323 33.8026 25.8561 33.1701C25.8911 32.2407 26.3714 31.3803 27.183 30.9152C27.9947 30.4501 28.9857 30.4674 29.8143 30.9021C30.3781 31.1978 30.7869 31.3622 31.19 31.4149C32.0732 31.5303 32.9664 31.2928 33.6731 30.7546C34.2031 30.351 34.5943 29.6784 35.3768 28.3334C36.1593 26.9883 36.5506 26.3158 36.6378 25.6584C36.754 24.7819 36.5147 23.8955 35.9724 23.1941C35.7249 22.874 35.377 22.6049 34.8371 22.2682C34.0434 21.7733 33.5328 20.9302 33.5328 20C33.5329 19.0699 34.0435 18.227 34.8371 17.7321C35.3771 17.3954 35.725 17.1263 35.9726 16.8061C36.5149 16.1047 36.7542 15.2183 36.6379 14.3418C36.5507 13.6844 36.1595 13.0119 35.377 11.6668C34.5945 10.3218 34.2033 9.64924 33.6732 9.24561C32.9665 8.70743 32.0733 8.46991 31.1902 8.5853C30.787 8.63798 30.3782 8.80242 29.8144 9.09816C28.9858 9.53282 27.9948 9.55019 27.1831 9.0851C26.3714 8.62001 25.8911 7.7596 25.8561 6.83006C25.8322 6.19762 25.7713 5.76405 25.6157 5.39122C25.2748 4.57446 24.621 3.92554 23.798 3.58723ZM20.8333 25.0002C23.6158 25.0002 25.8714 22.7616 25.8714 20.0002C25.8714 17.2387 23.6158 15.0002 20.8333 15.0002C18.0509 15.0002 15.7953 17.2387 15.7953 20.0002C15.7953 22.7616 18.0509 25.0002 20.8333 25.0002Z"
            fill="currentColor"
          />
        </svg>
      );
    case 3:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33331 20.0002C3.33331 10.7954 10.7952 3.3335 20 3.3335C29.2047 3.3335 36.6666 10.7954 36.6666 20.0002C36.6666 29.2049 29.2047 36.6668 20 36.6668C10.7952 36.6668 3.33331 29.2049 3.33331 20.0002ZM18.75 8.3335C18.75 7.64314 19.3096 7.0835 20 7.0835C27.1337 7.0835 32.9166 12.8665 32.9166 20.0002C32.9166 27.1338 27.1337 32.9168 20 32.9168C12.8663 32.9168 7.08331 27.1338 7.08331 20.0002C7.08331 19.3098 7.64296 18.7502 8.33331 18.7502C9.02367 18.7502 9.58331 19.3098 9.58331 20.0002C9.58331 25.7531 14.247 30.4168 20 30.4168C25.7529 30.4168 30.4166 25.7531 30.4166 20.0002C30.4166 14.2472 25.7529 9.5835 20 9.5835C19.3096 9.5835 18.75 9.02385 18.75 8.3335ZM20 12.0835C19.3096 12.0835 18.75 12.6431 18.75 13.3335C18.75 14.0239 19.3096 14.5835 20 14.5835C22.9915 14.5835 25.4166 17.0086 25.4166 20.0002C25.4166 22.9917 22.9915 25.4168 20 25.4168C19.3096 25.4168 18.75 25.9765 18.75 26.6668C18.75 27.3572 19.3096 27.9168 20 27.9168C24.3722 27.9168 27.9166 24.3724 27.9166 20.0002C27.9166 15.6279 24.3722 12.0835 20 12.0835Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            d="M15.0571 9.93858L10.8186 14.1644C10.0395 14.9412 9.32478 15.6537 8.76038 16.2978C8.39794 16.7114 8.03573 17.1641 7.72893 17.6643L7.68763 17.6232C7.60924 17.545 7.56999 17.5059 7.53063 17.4677C6.79391 16.7529 5.92733 16.1845 4.97724 15.7931C4.92647 15.7722 4.87494 15.7517 4.77189 15.7109L4.1408 15.4608C3.28587 15.1221 3.05802 14.0215 3.70855 13.3729C5.57556 11.5116 7.81718 9.27673 8.89899 8.82787C9.85307 8.43201 10.8837 8.30029 11.8777 8.44719C12.7885 8.58179 13.6501 9.04962 15.0571 9.93858Z"
            fill="currentColor"
          />
          <path
            d="M22.2945 32.1888C22.636 32.5354 22.8629 32.7803 23.0679 33.0419C23.3385 33.3872 23.5804 33.7539 23.7913 34.1384C24.0287 34.5712 24.213 35.0335 24.5816 35.9582C24.8817 36.7109 25.8786 36.9099 26.4576 36.3326L26.5976 36.193C28.4646 34.3316 30.7062 32.0967 31.1564 31.0181C31.5534 30.0669 31.6855 29.0394 31.5382 28.0483C31.4032 27.1404 30.9341 26.2815 30.0427 24.879L25.7899 29.119C24.9932 29.9134 24.2626 30.6418 23.6019 31.2124C23.206 31.5543 22.7728 31.8961 22.2945 32.1888Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0778 27.2951L33.8225 17.5795C35.2259 16.1804 35.9276 15.4808 36.2972 14.5911C36.6668 13.7015 36.6668 12.7121 36.6668 10.7334V9.78812C36.6668 6.74538 36.6668 5.22401 35.7187 4.27875C34.7706 3.3335 33.2447 3.3335 30.1928 3.3335H29.2447C27.26 3.3335 26.2676 3.3335 25.3753 3.70199C24.483 4.07049 23.7813 4.77008 22.3779 6.16926L12.6332 15.8848C10.9933 17.5197 9.97649 18.5335 9.58275 19.5126C9.45834 19.822 9.39614 20.1279 9.39614 20.4489C9.39614 21.7857 10.4751 22.8615 12.6332 25.013L12.9232 25.3022L16.3207 21.854C16.8053 21.3622 17.5967 21.3564 18.0884 21.8409C18.5802 22.3254 18.5861 23.1168 18.1015 23.6086L14.6936 27.0673L14.9221 27.2951C17.0801 29.4466 18.1591 30.5224 19.4999 30.5224C19.7962 30.5224 20.0796 30.4699 20.3648 30.3648C21.3702 29.9945 22.3966 28.9712 24.0778 27.2951ZM28.6558 15.8855C27.3917 17.1458 25.3421 17.1458 24.078 15.8855C22.8138 14.6252 22.8138 12.5817 24.078 11.3214C25.3421 10.0611 27.3917 10.0611 28.6558 11.3214C29.9199 12.5817 29.9199 14.6252 28.6558 15.8855Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export function ScrollProcess() {
  const root = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeUpTo, setActiveUpTo] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let revert: (() => void) | undefined;

    void loadScrollMotion().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !root.current || !mainRef.current || !lineRef.current) return;

      const ctx = gsap.context(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const mainEl = mainRef.current;
        const lineEl = lineRef.current;
        if (!mainEl || !lineEl) return;

        const items = Array.from(mainEl.querySelectorAll<HTMLElement>("[data-process-row]"));

        const getThresholds = () => {
          const totalH = mainEl.offsetHeight || 1;
          return items.map((item) => (item.offsetTop + item.offsetHeight / 2) / totalH);
        };

        if (reduced) {
          setActiveUpTo(items.length - 1);
          gsap.set(lineEl, { clipPath: "inset(0% 0% 0% 0%)" });
          return;
        }

        const initialThresholds = getThresholds();
        const startRatio = initialThresholds[0] ?? 0.1;
        const endRatio = initialThresholds[initialThresholds.length - 1] ?? 0.9;

        const updateForProgress = (progress: number) => {
          const thresholds = getThresholds();
          const minR = thresholds[0] ?? startRatio;
          const maxR = thresholds[thresholds.length - 1] ?? endRatio;
          const currentRatio = minR + progress * (maxR - minR);

          const bottomInset = Math.max(0, Math.min(100, (1 - currentRatio) * 100));
          gsap.set(lineEl, { clipPath: `inset(0% 0% ${bottomInset.toFixed(2)}% 0%)` });

          let nextActive = 0;
          for (let i = 0; i < thresholds.length; i += 1) {
            if (currentRatio >= (thresholds[i] ?? 0) - 0.025) {
              nextActive = i;
            }
          }
          setActiveUpTo((prev) => (prev === nextActive ? prev : nextActive));
        };

        updateForProgress(0);

        ScrollTrigger.create({
          id: "process-steps",
          trigger: mainEl,
          start: "top 68%",
          end: "bottom 68%",
          scrub: 0.25,
          invalidateOnRefresh: true,
          onRefresh: (self) => updateForProgress(self.progress),
          onUpdate: (self) => updateForProgress(self.progress),
        });

        ScrollTrigger.refresh();
      }, root);

      revert = () => {
        ctx.revert();
        ScrollTrigger.getById("process-steps")?.kill();
      };
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <section ref={root} className="relative bg-background" aria-labelledby="process-heading">
      <div className="container-medium">
        <div className="process-layout">
          <div className="heading-layout">
            <div className="eye-brow">
              <div className="eye-brow-number">004</div>
              <div className="eye-brow-text-wrap">
                <div className="eye-brow-dot" aria-hidden="true" />
                <div className="eye-brow-text">process</div>
              </div>
            </div>
            <div className="heading-wrap">
              <h2 id="process-heading" className="heading-style-h2">
                How We Work
              </h2>
              <p className="subheading-text">
                A proven process designed to transform complex workflows into scalable AI-powered
                systems, efficiently and strategically.
              </p>
            </div>
          </div>

          <div ref={mainRef} className="process-main">
            {deliverySteps.map((step, index) => {
              const isActive = index <= activeUpTo;
              const isEven = index % 2 === 1;
              const isFirst = index === 0;
              const isLast = index === deliverySteps.length - 1;

              const mediaBlock = (
                <div
                  className={cn("process-item-block", !isEven && "media-odd")}
                  data-process-media
                >
                  <div className="process-item-number-wrap">
                    {isEven ? (
                      <>
                        <div className={cn("process-item-number", isActive && "active")}>
                          {step.number}
                        </div>
                        <div className={cn("process-item-icon-frame", isActive && "active")}>
                          <div className="process-item-icon">
                            <StepIcon index={index} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={cn("process-item-icon-frame", isActive && "active")}>
                          <div className="process-item-icon">
                            <StepIcon index={index} />
                          </div>
                        </div>
                        <div className={cn("process-item-number", isActive && "active")}>
                          {step.number}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );

              const copyBlock = (
                <div
                  className={cn("process-item-block", isEven && "align-right")}
                  data-process-copy
                >
                  <div className="process-item-content">
                    <h3 className="process-item-title">{step.title}</h3>
                    <p className="process-item-desc">{step.description}</p>
                  </div>
                </div>
              );

              const centerDot = (
                <div className="process-item-center" aria-hidden="true">
                  <div className={cn("process-dot", isActive && "active")}>
                    <div className={cn("process-dot-inner", isActive && "active")}>
                      <div className={cn("process-dot-dot", isActive && "active")} />
                    </div>
                  </div>
                  {isFirst && (
                    <div
                      className={cn("process-item process-line-hide-top", isActive && "active")}
                    />
                  )}
                  {isLast && (
                    <div
                      className={cn("process-item process-line-hide-bottom", isActive && "active")}
                    />
                  )}
                </div>
              );

              return (
                <article
                  key={step.number}
                  data-process-row={step.number}
                  className={cn("process-item", isActive && "active")}
                >
                  {isEven ? (
                    <>
                      {copyBlock}
                      {centerDot}
                      {mediaBlock}
                    </>
                  ) : (
                    <>
                      {mediaBlock}
                      {centerDot}
                      {copyBlock}
                    </>
                  )}
                </article>
              );
            })}

            <div className="process-line-ray" aria-hidden="true">
              <div ref={lineRef} className="process-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
