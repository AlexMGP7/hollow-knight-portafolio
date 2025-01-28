import { FC, useRef, useEffect, useState } from "react";
import Slide from "./Slide";

interface SliderProps {
  slides: Array<any>;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  isMobile: boolean;
}

const Slider: FC<SliderProps> = ({ slides, currentSlide, setCurrentSlide, isMobile }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState<number | null>(null);

  const handleSliderScroll = (direction: "next" | "prev") => {
    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    // Manejo de scroll con rueda de mouse
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleSliderScroll(e.deltaY > 0 ? "next" : "prev");
    };

    // Manejo de eventos táctiles
    const handleTouchStart = (e: TouchEvent) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (startY === null) return;

      const deltaY = e.touches[0].clientY - startY;
      if (Math.abs(deltaY) > 50) {
        handleSliderScroll(deltaY > 0 ? "prev" : "next");
        setStartY(null); // Reinicia el toque después de un cambio
      }
    };

    slider?.addEventListener("wheel", handleWheel, { passive: false });
    slider?.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider?.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      slider?.removeEventListener("wheel", handleWheel);
      slider?.removeEventListener("touchstart", handleTouchStart);
      slider?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSlide, startY]);

  return (
    <div
      ref={sliderRef}
      className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out"
      style={{ transform: `translateY(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide) => (
        <Slide key={slide.id} slide={slide} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default Slider;
