import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`scroll-top-btn${visible ? " scroll-top-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <HiArrowUp />
    </button>
  );
}

export default ScrollToTop;
