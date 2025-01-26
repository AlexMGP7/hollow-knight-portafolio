import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../data/slides";
import About from "./About";

const Header: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderScroll = (direction: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length;

    setCurrentSlide(newSlide);

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateY(-${newSlide * 100}%)`;
    }

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        handleSliderScroll("next");
      } else {
        handleSliderScroll("prev");
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (slider) {
        slider.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientY;
    setTouchStartY(touchStart);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const touchDiff = touchStartY - touchEnd;

    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        handleSliderScroll("next");
      } else {
        handleSliderScroll("prev");
      }
    }
  };

  return (
    <section
      id="header"
      className="
        relative
        w-full
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) =>
          slide.content === "About" ? (
            // Renderiza el componente About
            <div
              key={slide.id}
              // className="relative h-screen w-full flex items-center justify-center bg-gray-900"
            >
              <About />
            </div>
          ) : (
            // Renderiza las demás diapositivas
            <div
              key={slide.id}
              className="relative h-screen w-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image || "/placeholder.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="
                  bg-black/60
                  p-8
                  rounded-lg
                  text-center
                  text-white
                  max-w-xl
                "
              >
                <h2 className="text-4xl mb-4">{slide.title}</h2>
                <p className="text-2xl mb-6">{slide.subtitle}</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/80">
        <button
          onClick={() => handleSliderScroll("prev")}
          className="p-2 hover:text-white transition-colors"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <div className="flex items-center gap-4 font-medium">
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <div className="w-12 h-px bg-white/30">
            <div
              className="h-full bg-white transition-all duration-1000"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
        <button
          onClick={() => handleSliderScroll("next")}
          className="p-2 hover:text-white transition-colors"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>
    </section>
  );
};

export default Header;
