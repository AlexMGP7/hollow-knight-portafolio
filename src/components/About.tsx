import type { FC } from 'react';
import { studies } from '../data/studies';
import { languages } from '../data/languages';
import { technology } from '../data/technology';
import { tools } from '../data/tools';

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
    <div className="flex flex-col items-center text-center p-8">
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center cursor-pointer group"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-16 h-16 object-contain border-2 border-blue-400 rounded-full p-2 transition-transform transform group-hover:scale-110"
              title={item.name}
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
      className="flex flex-col items-center justify-center text-center p-8"
    >
      <AboutSection title="Estudios" items={studies} />
      <AboutSection title="Lenguajes" items={languages} />
      <AboutSection title="Tecnologias" items={technology} />
      <AboutSection title="Herramientas" items={tools} />
    </section>
  );
};

export default About;
