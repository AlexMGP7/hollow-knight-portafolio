import { useState, useEffect } from 'react';
import { hornetAnimations } from '../../helpers/hornetAnimations';

export const useHornetAnimation = (animation: keyof typeof hornetAnimations) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = hornetAnimations[animation];

  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 100);

    return () => clearInterval(interval);
  }, [animation, frames]);

  const currentFrame = frames ? frames[frameIndex] : null;

  return { currentFrame };
};
