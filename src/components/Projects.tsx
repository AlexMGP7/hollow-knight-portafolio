import React, { useState } from "react";
import {
  FaStackOverflow,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const cardsData = [
  {
    name: "Sistema de Inventario FIFO",
    position: "Autónomo",
    link: "https://fifo-system.vercel.app/",
    image: "/projects/fifo2.png",         // Imagen inicial
    activeImage: "/projects/fifo.png", // Imagen cuando está activa / hover
  },
  {
    name: "TicketMaster de RedesIp",
    position: "RedesIp",
    link: "https://ticketmasterfront-rho.vercel.app/",
    image: "/projects/redesip2.png",     // Imagen inicial
    activeImage: "/projects/redesip.png", // Imagen activa
  },
];

const Projects: React.FC = () => {
  // Maneja la tarjeta "activa" (ej. doble tap en móviles)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTap = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    if (activeIndex !== index) {
      // Primer tap: evita navegación y muestra "hover"
      event.preventDefault();
      setActiveIndex(index);
    } else {
      // Segundo tap: permite navegar
      setActiveIndex(null);
    }
  };

  return (
    <div className="w-full font-['Ubuntu_Mono'] py-8">
      {/* Título y Redes Sociales */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mis Proyectos</h1>
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl">
          <a
            href="https://stackoverflow.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f48024] transition-colors"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C13584] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0a66c2] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Carrusel de Proyectos */}
      <div
        className="
          mx-auto
          flex justify-center gap-2 
          w-full max-w-[1000px]
          px-4
          h-[500px]       /* Pantallas grandes */
          md:h-[400px]    /* Laptops */
          sm:h-[300px]    /* Móviles y pantallas pequeñas */
          2xl:h-[600px]   /* Monitores muy grandes */
        "
      >
        {cardsData.map((card, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => handleTap(e, index)}
              className={`
                group 
                relative 
                shrink-0 
                basis-[120px] 
                hover:basis-[250px] 
                rounded-md 
                shadow-[1px_5px_15px_#1e0e3e] 
                cursor-pointer
                overflow-hidden
                transition-[flex-basis,transform]
                duration-500 
                ease-in-out 
                hover:-translate-y-[30px]
                ${isActive ? "basis-[250px] -translate-y-[30px]" : ""}
              `}
            >
              {/* Capa base: imagen normal */}
              <div
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="absolute inset-0"
              />

              {/* Capa superior: imagen activa (hover o activeIndex) */}
              <div
                style={{
                  backgroundImage: `url(${card.activeImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className={`
                  absolute inset-0
                  opacity-0
                  transition-opacity duration-500 ease-in-out
                  group-hover:opacity-100
                  ${isActive ? "opacity-100" : ""}
                `}
              />

              {/* Contenido emergente (texto) */}
              <div
                className={`
                  absolute 
                  bottom-0 
                  w-full 
                  flex 
                  flex-col 
                  items-center 
                  justify-end 
                  p-4
                  bg-gradient-to-t 
                  from-[rgba(9,14,26,0.68)]
                  to-transparent
                  text-gray-100 
                  text-xl
                  opacity-0
                  translate-y-full
                  transition-all
                  duration-500
                  ease-in-out
                  invisible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:visible
                  ${isActive ? "opacity-100 translate-y-0 visible" : ""}
                `}
              >
                <h2 className="text-xl sm:text-2xl">{card.name}</h2>
                <span className="mt-1 text-lg">{card.position}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
