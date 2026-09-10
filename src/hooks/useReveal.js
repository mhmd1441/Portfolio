import { useEffect } from "react";

const SELECTOR = ".reveal:not(.revealed)";

/**
 * Adds the `revealed` class to `.reveal` elements when they scroll into view.
 *
 * Pages are lazy-loaded, so their elements appear some time after the route
 * changes. A MutationObserver watches for new elements instead of relying on
 * a fixed delay, which previously left slow-loading pages blank.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const intersection = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            intersection.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    const observeNew = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => intersection.observe(el));

    observeNew();

    const mutations = new MutationObserver((records) => {
      if (records.some((record) => record.addedNodes.length > 0)) observeNew();
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      intersection.disconnect();
    };
  }, []);
}
