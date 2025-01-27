import { useHornetPhysics } from './useHornetPhysics';
import { useHornetAnimation } from './useHornetAnimation';
import HornetSprite from './HornetSprite';
import { useEffect } from 'react';

const HornetContainer: React.FC = () => {
  const { position, direction, animation, handleKeyEvents } = useHornetPhysics();
  const { currentFrame } = useHornetAnimation(animation);

  // Manejo de eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvents.keyDown);
    window.addEventListener('keyup', handleKeyEvents.keyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyEvents.keyDown);
      window.removeEventListener('keyup', handleKeyEvents.keyUp);
    };
  }, [handleKeyEvents]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y - 64}px`, // Ajuste para alinear con el piso
      }}
    >
      <HornetSprite frame={currentFrame} direction={direction} />
    </div>
  );
};

export default HornetContainer;
