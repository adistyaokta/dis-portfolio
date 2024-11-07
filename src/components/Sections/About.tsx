import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TimelineCard } from '../Cards/TimelineCard';
import { Section } from '../Shared/Section';
import { cn } from '../../utils/utils';

const works = [
  {
    title: 'Frontend Web Developer',
    time: { from: '2023', to: 'NOW' },
    content: 'at PT Lviors Jaya Sentosa',
  },
  {
    title: 'Frontend Developer',
    time: { from: '2022', to: '2022' },
    content: 'at LPPM Untag Surabaya',
  },
];

const edus = [
  {
    title: 'Informatics Engineering',
    time: { from: '2019', to: '2023' },
    content: 'at Universitas 17 Agustus 1945 Surabaya',
  },
];

export const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.45'],
  });
  const [isEducation, setIsEducation] = useState(false);

  return (
    <div className='w-full h-full flex flex-col gap-14 md:gap-40 '>
      <Section id='about' title='About'>
        <div className='text-balance md:text-4xl md:max-w-[75%] flex gap-2 text-secondary/70 '>
          <div className='w-2 bg-secondary/90'> </div>
          <p>
            Hello, I'm a web developer that currently focused on frontend
            development. I enjoy turning creative ideas into functional design
            that provides a clean user experiences as smooth as possible. I've
            been working modern framework like React and NextJs, and a lil' bit
            of backend framework like NestJs.
          </p>
        </div>
      </Section>
      <Section id='experience' title='Experience'>
        <div ref={element} className='h-full min-h-96'>
          <div className='font-medium text-xs md:text-xl text-right text-secondary/95 flex justify-center gap-1 my-5'>
            <div
              className={cn(
                'cursor-pointer min-w-40 min-h-7 flex items-center justify-center z-20 bg-secondary/20 font-bold text-center text-secondary/40 transition-all duration-300',
                !isEducation && 'bg-secondary text-primary'
              )}
              onClick={() => setIsEducation(false)}
            >
              Work
            </div>
            <div
              className={cn(
                'cursor-pointer min-w-40 min-h-7 flex items-center justify-center z-20 bg-secondary/20 font-bold text-center text-secondary/40 transition-all duration-300',
                isEducation && 'bg-secondary text-primary'
              )}
              onClick={() => setIsEducation(true)}
            >
              Education
            </div>
          </div>
          <div className='flex flex-col gap-0'>
            {!isEducation &&
              works.map((work, index) => {
                const start = index / works.length;
                const end = start + 1 / works.length;
                return (
                  <TimelineCard
                    key={index}
                    index={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                    title={work.title}
                    time={work.time}
                    content={work.content}
                  />
                );
              })}
            {isEducation &&
              edus.map((work, index) => {
                const start = index / works.length;
                const end = start + 1 / works.length;
                return (
                  <TimelineCard
                    key={index}
                    index={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                    title={work.title}
                    time={work.time}
                    content={work.content}
                  />
                );
              })}
          </div>
        </div>
      </Section>
    </div>
  );
};
