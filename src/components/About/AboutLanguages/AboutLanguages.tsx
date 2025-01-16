import type { FC } from 'react';
import '../About.css';

const AboutLanguages: FC = () => {
  const languages = [
    {
      id: 1,
      logo: '/src/assets/logos/html5.png',
      name: 'HTML5',
    },
    {
      id: 2,
      logo: '/src/assets/logos/css3.png',
      name: 'CSS3',
    },
    {
      id: 3,
      logo: '/src/assets/logos/javascript.png',
      name: 'JavaScript',
    },
    {
      id: 4,
      logo: '/src/assets/logos/typescript.png',
      name: 'TypeScript',
    },
    {
      id: 5,
      logo: '/src/assets/logos/react.svg',
      name: 'React',
    },
    {
      id: 6,
      logo: '/src/assets/logos/nodejs.png',
      name: 'Node.js',
    },
  ];

  return (
    <div className="about-section">
      <h3>Lenguajes / Herramientas</h3>
      <div className="item-list">
        {languages.map((language) => (
          <div key={language.id} className="item">
            <img
              src={language.logo}
              alt={language.name}
              className="item-logo"
              title={language.name}
            />
            <div className="hidden-info">{language.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutLanguages;
