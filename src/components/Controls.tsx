import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  setCurrentSlide: (index: number) => void;
}

const Controls: FC<ControlsProps> = ({ currentSlide, totalSlides, setCurrentSlide }) => {
  const handleSliderScroll = (direction: "next" | "prev") => {
    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-white/80">
      <button
        onClick={() => handleSliderScroll("prev")}
        className="p-2 hover:text-white transition-colors"
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
      <div className="flex items-center gap-4 font-medium">
        <span>{String(currentSlide + 1).padStart(2, "0")}</span>
        <div className="w-12 h-px bg-white/30">
          <div
            className="h-full bg-white transition-all duration-1000"
            style={{
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>
        <span>{String(totalSlides).padStart(2, "0")}</span>
      </div>
      <button
        onClick={() => handleSliderScroll("next")}
        className="p-2 hover:text-white transition-colors"
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
    </div>
  );
};

export default Controls;
