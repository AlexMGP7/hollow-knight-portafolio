import type { FC } from 'react';
//import './Header.css';

const Header: FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="header" className="header-container">
      <div className="overlay">
        <h2 className=''>Alexander Gonzalez</h2>
        <p>Software Engineer | Full Stack Developer</p>
        <button className="scroll-button" onClick={handleScroll}>
          ↓ Más sobre mi ↓
        </button>
      </div>
    </section>
  );
};

export default Header;
