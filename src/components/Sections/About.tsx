import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { TimelineCard } from '../Cards/TimelineCard';
import { Section } from '../Shared/Section';

const works = [
  {
    title: 'frontend web dev',
    time: { from: '2023', to: '2024' },
    content: 'at PT digidaw',
  },
  {
    title: 'frontend web dev',
    time: { from: '2023', to: '2024' },
    content: 'at PT digidaw',
  },
  {
    title: 'frontend web dev',
    time: { from: '2023', to: '2024' },
    content: 'at Gudang Garam Jaya',
  },
];

export const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.45'],
  });

  return (
    <div className='w-full flex flex-col gap-14 md:gap-40 '>
      <Section title='About'>
        <div className='text-pretty md:text-4xl md:max-w-[70%] text-secondary/70 border-l-2 pl-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta
          diam. Praesent ultricies enim sit amet lectus semper consectetur.
          Donec eu suscipit sem, lacinia vulputate justo.
        </div>
      </Section>
      <Section title='Experience'>
        <div ref={element} className=''>
          <div className='font-medium text-xs md:text-xl text-right'>
            Work | Education
          </div>
          <div className='flex flex-col gap-0'>
            {works.map((work, index) => {
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
