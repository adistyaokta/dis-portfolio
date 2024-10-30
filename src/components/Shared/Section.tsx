import type React from 'react';
import { cn } from '../../utils/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { isMobile } from '../../stores/app.store';
import { Paragraph } from './Paragraph';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  const $isMobile = useStore(isMobile);
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 700],
    ['0%', $isMobile ? '300%' : '250%']
  );

  return (
    <motion.section
      // style={{
      //   opacity: useTransform(
      //     scrollY,
      //     [0, 300],
      //     ['0%', $isMobile ? '100%' : '250%']
      //   ),
      // }}
      className='w-full min-w-full min-h-dvh flex flex-col justify-center py-2'
    >
      <div className='flex flex-col'>
        <Paragraph value={title} />
        {/* <h2
          className={cn(
            'capitalize font-extrabold text-xl md:text-5xl',
            reverse && 'text-right'
          )}
        >
          <motion.span
            style={{
              y: y,
            }}
          >
            {title}
          </motion.span>
        </h2> */}
        {children}
      </div>
    </motion.section>
  );
};
