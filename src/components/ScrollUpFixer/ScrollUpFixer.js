import { useLayoutEffect } from "react";

const ScrollUpFixer = ({ children, actLuna }) => {
  useLayoutEffect(() => {
    if (actLuna !== 0) {
      const element = document.getElementById("luna-scroll");
      const topOffset = element.offsetTop;
      document.documentElement.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      // document.documentElement.scrollTo({ top: 3450, behavior: "smooth" });
    }
  }, [actLuna]);

  return children;
};

export default ScrollUpFixer;
