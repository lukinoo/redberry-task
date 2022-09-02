import { useState, useEffect } from "react";
import type { useResponsiveType } from "./useResponsive.types";

enum ResponsiveSrcEnum {
  desktop = "assets/img/Group1.png",
  mobile = "assets/img/Group.png",
}

export const useResponsive = (): useResponsiveType => {
  const [homeImage, setHomeImage] = useState<string>("");

  const handleResponsiveImage = (e: Event) => {
    const { innerWidth } = e.target as Window;

    let responsive_check: string =
      innerWidth < 768 ? ResponsiveSrcEnum.mobile : ResponsiveSrcEnum.desktop;

    setHomeImage(responsive_check);
  };

  useEffect(() => {
    // resize event
    window.addEventListener("resize", handleResponsiveImage);

    // clean up function
    return () => {
      window.removeEventListener("resize", handleResponsiveImage);
    };
  }, []);

  return [homeImage];
};
