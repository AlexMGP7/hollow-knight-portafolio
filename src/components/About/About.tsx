import type { FC } from 'react';
import './About.css';
import AboutStudies from './AboutStudies/AboutStudies';
import AboutTools from './AboutLanguages/AboutLanguages';

const About: FC = () => {
  return (
    <section id="about" className="about-container">
        <div className="about-subsections">
          <AboutStudies />
          <AboutTools />
        </div>
    </section>
  );
};

export default About;
