import type { Variants, Transition } from 'framer-motion';

/**
 * Standard motion transitions and variants for Harshad's Digital Universe.
 * Respects prefers-reduced-motion and provides subtle, purposeful interactions.
 */

export const standardTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1], // easeOutCubic / gentle ease
};

export const snappyTransition: Transition = {
  duration: 0.3,
  ease: [0.2, 0.8, 0.2, 1],
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: standardTransition
  },
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: standardTransition
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: standardTransition
  },
  initial: { opacity: 0, y: -16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: standardTransition
  }
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: standardTransition
  },
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: standardTransition
  }
};

const buildStagger = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  },
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const createStaggerContainer = buildStagger;

export const staggerContainer: any = Object.assign(
  (staggerChildren = 0.08, delayChildren = 0.05) => buildStagger(staggerChildren, delayChildren),
  buildStagger()
);

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition
  },
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: standardTransition
  }
};

export const defaultViewport = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -50px 0px'
};

/**
 * Restrained card hover animation props
 */
export const cardHoverMotion = {
  whileHover: { 
    y: -4, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
  whileTap: { 
    scale: 0.99, 
    transition: { duration: 0.1 } 
  }
};
