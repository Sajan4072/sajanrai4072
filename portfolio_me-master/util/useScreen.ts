import { useEffect, useState } from "react";

const useScreen = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  const handleWidth = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (dimension.width === 0) {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [dimension]);
  return [dimension.width, dimension.width];
};

export default useScreen;
