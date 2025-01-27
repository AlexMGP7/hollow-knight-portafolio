import type { FC } from "react";
import { useState, useEffect } from "react";
import { slides } from "../data/slides";
import Slider from "./Slider";
import Controls from "./Controls";

const Header: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1040);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="header"
      className="
        relative
        w-full
        h-screen
        flex
        items-start sm:items-center
        justify-start sm:justify-center
        overflow-hidden
        px-4 sm:px-0
      "
    >
      <Slider
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        isMobile={isMobile}
      />
      <Controls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        setCurrentSlide={setCurrentSlide}
      />
    </section>
  );
};

export default Header;
