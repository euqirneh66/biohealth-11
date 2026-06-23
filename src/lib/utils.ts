import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0) => ({
  initial: {
    opacity: 0,
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut" as const
    }
  }
});
