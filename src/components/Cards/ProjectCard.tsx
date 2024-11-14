import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import type { ImageMetadata } from 'astro';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type ProjectCardProps = {
  title: string;
  tag: string[];
  image: ImageMetadata;
  path?: string;
  github?: string;
};

export const ProjectCard = ({
  title,
  image,
  tag,
  path,
  github,
}: ProjectCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={path ? path : github}
      ref={ref}
      target='_blank'
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className='group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8'
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -10 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className='relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl'
        >
          {title.split('').map((l, i) => {
            if (l === ' ') {
              return <span key={i}>&nbsp;</span>;
            }

            return (
              <motion.span
                key={i}
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 10 },
                }}
                transition={{ type: 'spring' }}
                className='inline-block font-bold'
              >
                {l}
              </motion.span>
            );
          })}
        </motion.span>
        <span className='relative z-10 mt-2 flex gap-4 text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50'>
          {github && (
            <a
              href={github}
              target='_blank'
              className='font-raleway flex items-center gap-1 w-fit cursor-pointer hover:underline hover:underline-offset-2 transition-all duration-100'
            >
              Github <Icon icon='line-md:github-loop' />
            </a>
          )}
          {path && (
            <a
              href={path}
              target='_blank'
              className='flex items-center gap-1 group/visit font-raleway w-fit cursor-pointer hover:underline hover:underline-offset-2 transition-all duration-100'
            >
              Visit Project{' '}
              <Icon
                icon='mdi:play-outline'
                size={20}
                className={
                  'rotate-90 group-hover/visit:rotate-0 transition-all duration-300'
                }
              />
            </a>
          )}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-10deg' },
          whileHover: { scale: 1.2, rotate: '10deg' },
        }}
        transition={{ type: 'spring' }}
        src={image.src}
        className='absolute z-0 h-24 w-32 rounded-md object-cover md:h-48 md:w-64'
        alt={`Image for ${title}`}
      />
      <div className='absolute right-0 bottom-0 flex gap-2'>
        {tag?.map((item) => {
          return (
            <span className='text-xs md:text-sm capitalize px-2 rounded-sm text-secondary bg-primary/70 font-bold'>
              {item}
            </span>
          );
        })}
      </div>

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='relative z-10 p-4'
      >
        <Icon
          icon='line-md:arrow-right'
          size={25}
          className={'scale-[2] md:scale-[4]'}
        />
      </motion.div>
    </motion.a>
  );
};
