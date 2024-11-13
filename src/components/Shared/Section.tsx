import { motion } from 'framer-motion';
import type React from 'react';
import { cn } from '../../utils/utils';
import { Paragraph } from './Paragraph';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  ref?: any;
  id?: string;
  minHeight?: string;
};

export const Section = ({
  title,
  children,
  ref,
  minHeight,
  id,
}: SectionProps) => {
  return (
    <motion.section id={id} ref={ref}>
      <div className='h-full pt-14'>
        <p className='flex flex-wrap leading-none text-xl md:text-5xl capitalize font-extrabold'>
          {title}
        </p>
        {children}
      </div>
    </motion.section>
  );
};
