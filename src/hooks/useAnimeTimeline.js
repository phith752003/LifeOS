import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export const useAnimeTimeline = (config, dependencies = []) => {
  const timelineRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    
    if (timelineRef.current) {
      timelineRef.current.pause();
    }

    timelineRef.current = anime.timeline({
      ...config,
      autoplay: true
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.pause();
      }
    };
  }, [reducedMotion, ...dependencies]);

  return timelineRef;
};
