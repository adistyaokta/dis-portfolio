import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 2]);
  const translateY = useTransform(scrollY, [0, 500], [0, -75]);

  return (
    <div className='w-full h-full min-h-dvh flex flex-col justify-between select-none'>
      <div className='flex flex-col flex-1 justify-center items-start font-anton overflow-hidden text-secondary uppercase'>
        <motion.div
          // initial={{ x: '-100%' }}
          // animate={{ x: '0%' }}
          // transition={{
          //   duration: 2,
          //   ease: 'easeInOut',
          // }}
          // style={{
          //   // scale,
          //   translateY,
          //   originX: 0,
          // }}
          className='text-6xl md:text-[15rem] leading-none'
        >
          Adistya
        </motion.div>
        <motion.div
          // initial={{ y: '-20%', opacity: 0 }}
          // animate={{ y: '0%', opacity: 1 }}
          // transition={{
          //   duration: 1,
          //   delay: 1,
          //   ease: 'easeInOut',
          // }}
          // style={{
          //   // scale: useTransform(scrollY, [0, 500], [1, 0]),
          //   originX: 0,
          // }}
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
            <motion.div
              // initial={{ opacity: 0.5 }}
              // animate={{ opacity: 1 }}
              // transition={{
              //   duration: 2,
              //   ease: 'easeInOut',
              // }}
              // style={{
              //   scale: useTransform(scrollY, [0, 500], [0, 1]),
              //   originX: 1,
              // }}
              className='flex-1 h-1 md:hidden bg-secondary'
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
