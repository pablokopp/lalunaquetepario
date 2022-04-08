import { useLayoutEffect } from "react";

const ScrollUpFixer = ({ children, actLuna }) => {
  useLayoutEffect(() => {
    if (actLuna !== 0) {
      document.documentElement.scrollTo(0, 860);
    }
  }, [actLuna]);

  return children;
};

export default ScrollUpFixer;
