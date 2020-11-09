import { RefObject } from "react";

export const useDimensions = (tabRef: RefObject<HTMLDivElement>) => {
  const dimensions = {
    height: 0,
    width: 0,
  };

  if (tabRef && tabRef.current) {
    const rect = tabRef.current.getBoundingClientRect();
    dimensions.width = rect.width;
    dimensions.height = rect.height;
  }

  return dimensions;
};
