import { useStore } from '@nanostores/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { isMobile } from '../stores/app.store';
import { anim } from '../utils/utils';

export const Hero = () => {
  const { scrollY } = useScroll();
  const $isMobile = useStore(isMobile);

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const scale = useTransform(
    scrollY,
    [0, $isMobile ? 200 : 500],
    [1, $isMobile ? 3.75 : 2.5]
  );

  const y = useTransform(
    scrollY,
    [0, 700],
    ['0%', $isMobile ? '300%' : '250%']
  );

  const x = useTransform(
    scrollY,
    [0, 700],
    ['0%', $isMobile ? '-400%' : '-110%']
  );

  const springScale = useSpring(scale, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      {...anim(opacity)}
      className='w-full h-full min-h-dvh flex flex-col justify-between select-none'
    >
      <div className='flex flex-col flex-1 justify-center items-start font-anton overflow-hidden text-secondary uppercase'>
        <motion.div
          style={{
            scale: springScale,
            originX: 0,
            y: springY,
          }}
          className='text-6xl md:text-[15rem] leading-none'
        >
          Adistya
        </motion.div>
        <motion.div
          style={{
            opacity: useTransform(scrollY, [0, 250], [1, 0]),
            x: springX,
          }}
          className='text-4xl md:text-[10rem] leading-none'
        >
          Oktaviano
        </motion.div>
      </div>
      <div className='flex flex-col h-full py-4 justify-start items-start md:justify-end font-anton text-secondary uppercase'>
        <div className='text-4xl md:text-6xl'>Frontend</div>
        <div className='w-full flex flex-col md:flex-row md:items-end md:justify-between gap-2'>
          <div className='text-6xl md:text-9xl'>Web Developer</div>
          <div className='text-xs md:text-lg md:w-1/3 text-right max-h-10 text-secondary font-raleway normal-case flex gap-2 items-center md:items-end justify-center md:justify-end'>
            <span className='hidden md:block animate-pulse text-2xl text-accent'>
              ■
            </span>{' '}
            Based in Indonesia
            <div className='flex-1 h-1 md:hidden bg-secondary'></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
