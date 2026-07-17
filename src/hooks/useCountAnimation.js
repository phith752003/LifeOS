import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useReducedMotion } from './useReducedMotion';

export const useCountAnimation = (targetValue, formatFn = val => Math.round(val)) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const obj = useRef({ value: 0 });

  useEffect(() => {
    if (!ref.current) return;
    
    if (reducedMotion) {
      ref.current.innerHTML = formatFn(targetValue);
      return;
    }

    const anim = anime({
      targets: obj.current,
      value: targetValue,
      duration: 800,
      easing: 'easeOutExpo',
      update: () => {
        if (ref.current) {
          ref.current.innerHTML = formatFn(obj.current.value);
        }
      }
    });
    
    return () => anim.pause();
  }, [targetValue, reducedMotion, formatFn]);

  return ref;
};
