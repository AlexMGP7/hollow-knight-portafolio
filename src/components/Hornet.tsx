import { useState, useEffect } from 'react';
import { hornetAnimations } from '../helpers/hornetAnimations';

interface HornetProps {
  speed?: number; // Velocidad de cambio de frame (en milisegundos)
}

const Hornet: React.FC<HornetProps> = ({ speed = 100 }) => {
  const [frameIndex, setFrameIndex] = useState(0); // Frame actual
  const [animation, setAnimation] = useState<keyof typeof hornetAnimations>('idle'); // Animación actual
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Posición del personaje
  const [direction, setDirection] = useState<'left' | 'right'>('right'); // Dirección del personaje

  useEffect(() => {
    const frames = hornetAnimations[animation];
    if (!frames || frames.length === 0) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length); // Cicla los frames
    }, speed);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [animation, speed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setAnimation('jump');
          setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
          break;
        case 'ArrowDown':
          setAnimation('hard_land');
          setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
          break;
        case 'ArrowLeft':
          setAnimation('run');
          setDirection('left'); // Cambia la dirección a la izquierda
          setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
          break;
        case 'ArrowRight':
          setAnimation('run');
          setDirection('right'); // Cambia la dirección a la derecha
          setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setAnimation('idle'); // Vuelve a "idle" al soltar la tecla
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const currentFrame = hornetAnimations[animation]?.[frameIndex];

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'top 0.1s, left 0.1s',
      }}
    >
      {currentFrame ? (
        <img
          src={`/Hornet/${currentFrame}`} // Ruta relativa desde /public/Hornet
          alt={`${animation} frame ${frameIndex}`}
          className="w-32 h-32"
          style={{
            transform: direction === 'left' ? 'scaleX(1)' : 'scaleX(-1)', // Voltear según la dirección
          }}
        />
      ) : (
        <p>No frame available</p>
      )}
    </div>
  );
};

export default Hornet;
