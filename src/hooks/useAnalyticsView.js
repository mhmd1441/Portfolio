import { useEffect } from "react";
import { trackEvent } from "../analytics";

/**
 * Records a one-time event when a meaningful page element becomes visible.
 * The event data stays anonymous and contains no visitor-entered information.
 */
export function useAnalyticsView(eventName, ref, params = {}) {
  const serializedParams = JSON.stringify(params);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window.IntersectionObserver !== "function") return undefined;

    let recorded = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || recorded) return;

        recorded = true;
        trackEvent(eventName, {
          ...JSON.parse(serializedParams),
          page_path: window.location.pathname,
        });
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eventName, ref, serializedParams]);
}
