import { FC, useRef, useEffect } from "react";
import Slide from "./Slide";

interface SliderProps {
  slides: Array<any>;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  isMobile: boolean;
}

const Slider: FC<SliderProps> = ({ slides, currentSlide, setCurrentSlide, isMobile }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderScroll = (direction: "next" | "prev") => {
    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleSliderScroll(e.deltaY > 0 ? "next" : "prev");
    };

    slider?.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider?.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

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
