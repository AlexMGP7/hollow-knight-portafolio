import type { FC } from "react";
import { languages } from "../data/languages";
import { tools } from "../data/tools";
import { studies } from '../data/studies';


interface SectionProps {
  title: string;
  items: Array<{
    id: number;
    logo: string;
    name: string;
  }>;
}

const AboutSection: FC<SectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col items-center text-center pt-4 pb-8">
      {/* Ajuste del padding */}
      <h3 className="text-2xl font-semibold mb-4 text-blue-300">{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center cursor-pointer group"
          >
            <div
              className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500 blur-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-70 pointer-events-none"
            ></div>
            <img
              src={item.logo}
              alt={item.name}
              className="w-16 h-16 object-contain p-2 transition-transform duration-700 ease-in-out transform group-hover:scale-105"
            />
            <div
              className="hidden absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-200 p-3 rounded-lg shadow-lg text-sm max-w-xs text-center z-10 group-hover:block"
            >
              {item.name}
              <div
                className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col text-center px-8" // Ajuste: Eliminamos `items-center` y `justify-center`
    >
      <AboutSection title="Estudios" items={studies} />
      <AboutSection title="Lenguajes & Tecnologías" items={languages} />
      <AboutSection title="Herramientas" items={tools} />
    </section>
  );
};

export default About;
