
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that automatically scrolls to top when route changes
 * Uses immediate scrolling to ensure animations are visible from the start
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash (anchor) in the URL
    if (!hash) {
      // Using scrollTo with behavior: "instant" (or no behavior) for immediate scrolling
      window.scrollTo({
        top: 0,
        behavior: "instant" // Changed from "smooth" to "instant" for immediate effect
      });
    }
  }, [pathname, hash]); // This effect runs when pathname changes

  return null; // This component doesn't render anything
};
