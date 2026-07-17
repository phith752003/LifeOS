import anime from 'animejs';

export const presets = {
  fadeInUp: (target, delay = 0) => ({
    targets: target,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 300,
    easing: 'easeOutExpo',
    delay,
  }),
  
  staggerFadeInUp: (target) => ({
    targets: target,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 300,
    easing: 'easeOutExpo',
    delay: anime.stagger(50),
  }),
  
  barGrowth: (target) => ({
    targets: target,
    scaleY: [0, 1],
    duration: 600,
    easing: 'spring(1, 80, 10, 0)',
    delay: anime.stagger(50),
  }),
  
  countUp: (target, value) => ({
    targets: target,
    innerHTML: [0, value],
    round: 1,
    duration: 800,
    easing: 'easeOutExpo',
  }),
  
  shake: (target) => ({
    targets: target,
    translateX: [0, -10, 10, -5, 5, 0],
    duration: 400,
    easing: 'easeOutExpo',
  }),
};
