import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { slides } from "../data/slides";
import About from "./About";

const Header: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Alexander_Gonzalez_CV.pdf";
    link.download = "Alexander_Gonzalez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const headerAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

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
            <div key={slide.id}>
              <About />
            </div>
          ) : (
            <div
              key={slide.id}
              className={`relative h-screen w-full flex flex-col justify-start sm:justify-center sm:items-center ${
                isMobile ? "mobile-background" : ""
              }`}
              style={{
                backgroundImage: `url(${
                  isMobile && slide.mobileImage ? slide.mobileImage : slide.image
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.div
                className="
              bg-black/60
              p-6 sm:p-8
              rounded-lg
              text-left sm:text-center
              text-white
              max-w-xl
            "
                initial="hidden"
                animate="visible"
                variants={headerAnimation}
              >
                <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4">{slide.title}</h2>
                <p className="text-xl sm:text-2xl mb-4 sm:mb-6">{slide.subtitle}</p>
                <motion.button
                  className="text-white border-b-2 border-white pb-2 flex items-center text-sm sm:text-lg hover:border-white/70 transition-colors"
                  initial="hidden"
                  animate="visible"
                  variants={buttonAnimation}
                  onClick={downloadCV}
                >
                  Descargar CV
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </motion.button>
              </motion.div>
            </div>
          )
        )}
      </div>
      {/* Slider Controls */}
      <div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-white/80"
      >
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