import { useState, useCallback, useRef, useEffect } from 'react';

const GRAVITY = 0.5;
const FLOOR = 300;
const MOVE_SPEED = 3;
const JUMP_FORCE = -12;

export const useHornetPhysics = () => {
  const [position, setPosition] = useState({ x: 0, y: FLOOR });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animation, setAnimation] = useState<'idle' | 'run' | 'jump'>('idle');

  const keysPressedRef = useRef<Set<string>>(new Set());

  const handleKeyEvents = {
    keyDown: (e: KeyboardEvent) => {
      keysPressedRef.current.add(e.key);
    },
    keyUp: (e: KeyboardEvent) => {
      keysPressedRef.current.delete(e.key);
    },
  };

  const updatePhysics = useCallback(() => {
    let { vx, vy } = velocity;
    let { x, y } = position;

    const leftPressed = keysPressedRef.current.has('ArrowLeft');
    const rightPressed = keysPressedRef.current.has('ArrowRight');
    const upPressed = keysPressedRef.current.has('ArrowUp');

    // Movimiento horizontal
    if (leftPressed) {
      vx = -MOVE_SPEED;
      setDirection('left');
    } else if (rightPressed) {
      vx = MOVE_SPEED;
      setDirection('right');
    } else {
      vx = 0;
    }

    // Salto
    if (upPressed && y >= FLOOR) {
      vy = JUMP_FORCE;
    }

    // Gravedad
    vy += GRAVITY;

    // Actualizar posición
    x += vx;
    y += vy;

    // Límite del piso
    if (y >= FLOOR) {
      y = FLOOR;
      vy = 0;
    }

    // Límite de la pantalla
    x = Math.max(0, Math.min(window.innerWidth - 64, x));

    // Animación
    if (y < FLOOR) {
      setAnimation('jump');
    } else {
      setAnimation(vx !== 0 ? 'run' : 'idle');
    }

    setPosition({ x, y });
    setVelocity({ vx, vy });
    requestAnimationFrame(updatePhysics);
  }, [position, velocity]);

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [updatePhysics]);

  return { position, direction, animation, handleKeyEvents };
};
