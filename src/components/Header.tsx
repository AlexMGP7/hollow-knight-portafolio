import type { FC } from 'react';

const Header: FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="header"
      className="
        relative
        w-full
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div
        className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          bg-center 
          bg-cover 
          bg-no-repeat 
          blur-sm 
          -z-10
        "
        style={{ backgroundImage: "url('/src/assets/1184118.jpg')" }}
      ></div>

      <div
        className="
          bg-black/50
          p-8
          rounded-lg
          text-center
          text-white
          max-w-xl
        "
      >
        <h2 className="text-4xl mb-4">Alexander Gonzalez</h2>
        <p className="text-2xl mb-6">Full Stack Developer</p>
        <button
          onClick={handleScroll}
          className="
            bg-[#2d3035]
            text-white
            text-base
            px-6
            py-3
            rounded-md
            cursor-pointer
            transition-transform
            duration-300
            ease-in-out
            shadow-md
            hover:scale-110
            hover:bg-[#4c5f7a]
            active:scale-95
          "
        >
          ↓ Más sobre mi ↓
        </button>
      </div>
    </section>
  );
};

export default Header;
