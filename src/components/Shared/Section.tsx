import type React from 'react';
import { cn } from '../../utils/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { isMobile } from '../../stores/app.store';
import { Paragraph } from './Paragraph';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  ref?: any;
  minHeight?: string;
};

export const Section = ({ title, children, ref, minHeight }: SectionProps) => {
  const $isMobile = useStore(isMobile);
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 700],
    ['0%', $isMobile ? '300%' : '250%']
  );

  return (
    <motion.section
      ref={ref}
      className={cn(
        `w-full min-w-full flex flex-col justify-start`,
        minHeight && `${minHeight}`
      )}
    >
      <div className='flex flex-col'>
        <Paragraph value={title} />
        {children}
      </div>
    </motion.section>
  );
};
