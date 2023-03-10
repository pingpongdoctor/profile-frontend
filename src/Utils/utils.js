import { useState, useEffect } from "react";
//DECLARE THE HOOK USE WINDOW SIZE
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
//FUNCTION TO SCROLL TO A CERTAIN ELEMENT
export function handleScrollToElement(value) {
  value.current.scrollIntoView({ behavior: "smooth" });
}
