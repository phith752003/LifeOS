import { useEffect } from 'react';
import anime from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export const useStagger = (selector, config = {}, dependencies = []) => {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    if (reducedMotion) {
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const anim = anime({
      targets: selector,
      opacity: [0, 1],
      translateY: [10, 0],
      delay: anime.stagger(50),
      duration: 400,
      easing: 'easeOutExpo',
      ...config
    });

    return () => {
      anim.pause();
    };
  }, [selector, reducedMotion, ...dependencies]);
};
