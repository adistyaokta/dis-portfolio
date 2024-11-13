import type { Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: (string | undefined | false)[]) => {
  return twMerge(classes.filter(Boolean).join(' '));
};

export const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
