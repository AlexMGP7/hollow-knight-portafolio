import type { FC } from 'react';
import '../About.css';

const AboutStudies: FC = () => {
  const studies = [
    {
      id: 1,
      logo: '/src/assets/logos/UDO.png',
      name: 'Lic. En Informática - Universidad de Oriente - En curso (2021 - actualidad)',
    },
    {
      id: 2,
      logo: '/src/assets/logos/freecodecamp.svg',
      name: 'Certificación en Desarrollo Web y en JS - FreeCodeCamp',
      url: 'https://www.freecodecamp.org/AlexMGP7',
    },
    {
      id: 3,
      logo: '/src/assets/logos/udemy.png',
      name: 'Desarrollo Web - Udemy',
    },
  ];

  return (
    <div className="about-section">
      <h3>Estudios / Cursos</h3>
      <div className="item-list">
        {studies.map((study) => (
          <div key={study.id} className="item">
            <img
              src={study.logo}
              alt={study.name}
              className="item-logo"
              title={study.name}
            />
            <div className="hidden-info">{study.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStudies;
