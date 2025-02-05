// Slide.tsx
import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import DownloadButton from "./DownloadButton";
import Projects from "./Projects";
// (Asegúrate de importar o definir el tipo Slide según corresponda)

interface SlideProps {
  slide: {
    id: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    mobileImageUrl?: string;
    content?: string; // Ahora es opcional
  };
  isMobile: boolean;
}


const Slide: React.FC<SlideProps> = ({ slide, isMobile }) => {
  // Selecciona la imagen según el tamaño de pantalla y si se tiene definida la versión móvil
  const bgImage =
    isMobile && slide.mobileImageUrl ? slide.mobileImageUrl : slide.imageUrl;

  if (slide.content === "About") {
    return <About />;
  }
  if (slide.content === "Projects") {
    return <Projects />;
  }

  return (
    <div
      className="relative h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="bg-black/60 p-6 rounded-lg text-white max-w-xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <h2 className="text-3xl sm:text-4xl mb-3">{slide.title}</h2>
        <p className="text-xl sm:text-2xl mb-4">{slide.description}</p>
        <DownloadButton />
      </motion.div>
    </div>
  );
};

export default Slide;
