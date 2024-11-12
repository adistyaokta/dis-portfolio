import { motion } from 'framer-motion';
import { cn } from '../../utils/utils';

type FlipCardProps = {
  name: string;
  path: string;
  className?: string;
  lineHeight?: number;
};

const DURATION = 0.25;
const STAGGER = 0.05;

export const FlipCard = ({
  name,
  path,
  className,
  lineHeight = 0.9,
}: FlipCardProps) => {
  return (
    <motion.a
      target='_blank'
      initial='initial'
      whileHover={'hovered'}
      className={cn(
        'relative block overflow-hidden whitespace-nowrap font-black uppercase text-7xl md:text-9xl border-t border-secondary/50',
        className && `${className}`
      )}
      href={path}
      style={{
        lineHeight: lineHeight,
      }}
    >
      <div>
        {name.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {name.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
