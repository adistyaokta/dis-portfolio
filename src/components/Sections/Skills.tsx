import { useRef } from 'react';
import { SkillCard } from '../Cards/SkillCard';
import { Section } from '../Shared/Section';
import { useScroll } from 'framer-motion';
import { skills } from '../../data/skills';

export const Skills = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'start 0.45'],
  });

  return (
    <Section title='Skills'>
      <div
        ref={element}
        className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'
      >
        {skills.map((item, i) => {
          const start = i / skills.length;
          const end = start + 1 / skills.length;
          return (
            <SkillCard
              key={i}
              range={[start, end]}
              skillName={item.name}
              progress={scrollYProgress}
              icon={item.icon}
            />
          );
        })}
      </div>
    </Section>
  );
};
