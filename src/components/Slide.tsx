import { FC } from "react";
import { motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import DownloadButton from "./DownloadButton";

interface SlideData {
  id: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  content?: string;
}

interface SlideProps {
  slide: SlideData;
  isMobile: boolean;
}

const Slide: FC<SlideProps> = ({ slide }) => {

  // Slide "About"
  if (slide.content === "About") {
    return <About />;
  }

  // Slide "Projects"
  if (slide.content === "Projects") {
    return <Projects />;
  }

  // Slide normal
  return (
    <div
      className="
        relative
        w-full
        h-screen
        flex
        items-center
        justify-center
        bg-black
      "
      style={{
        // Si tienes imageUrl, usarlo:
        backgroundImage: slide.imageUrl ? `url(${slide.imageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="bg-black/60 p-6 sm:p-8 rounded-lg text-center text-white max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4">{slide.title}</h2>
        <p className="text-xl sm:text-2xl mb-4 sm:mb-6">{slide.description}</p>
        <DownloadButton />
      </motion.div>
    </div>
  );
};

export default Slide;
