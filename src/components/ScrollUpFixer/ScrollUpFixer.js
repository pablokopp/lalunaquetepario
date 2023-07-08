import { useLayoutEffect } from "react";

const ScrollUpFixer = ({ children, actLuna }) => {
  useLayoutEffect(() => {
    if (actLuna !== 0) {
      document.documentElement.scrollTo(0, 3450);
    }
  }, [actLuna]);

  return children;
};

export default ScrollUpFixer;
