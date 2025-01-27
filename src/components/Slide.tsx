import { FC } from "react";
import { motion } from "framer-motion";
import About from "./About";
import DownloadButton from "./DownloadButton";

interface SlideProps {
  slide: any;
  isMobile: boolean;
}

const Slide: FC<SlideProps> = ({ slide, isMobile }) => {
  return slide.content === "About" ? (
    <div>
      <About />
    </div>
  ) : (
    <div
      className={`relative h-screen w-full flex flex-col justify-start sm:justify-center sm:items-center ${
        isMobile ? "mobile-background" : ""
      }`}
      style={{
        backgroundImage: `url(${isMobile && slide.mobileImage ? slide.mobileImage : slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="bg-black/60 p-6 sm:p-8 rounded-lg text-left sm:text-center text-white max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4">{slide.title}</h2>
        <p className="text-xl sm:text-2xl mb-4 sm:mb-6">{slide.subtitle}</p>
        <DownloadButton />
      </motion.div>
    </div>
  );
};

export default Slide;
