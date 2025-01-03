import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '../../utils/utils';

type ParagraphProps = {
  value: string;
};

export const Paragraph = ({ value }: ParagraphProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.45'],
  });

  const words = value.split(' ');
  return (
    <p
      ref={element}
      className={cn('flex flex-wrap leading-none text-xl md:text-5xl ')}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export const Word = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const chars = children.split('');
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='relative mr-1 xl:mr-3 mt-2 capitalize font-semibold text-xl md:text-5xl'>
      {chars.map((char: any, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className='absolute opacity-[0.3] normal-case font-semibold'>
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
