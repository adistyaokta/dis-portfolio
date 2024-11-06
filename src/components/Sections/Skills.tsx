import { useRef } from 'react';
import { SkillCard } from '../Cards/SkillCard';
import { Section } from '../Shared/Section';
import { useScroll } from 'framer-motion';

const skills = [
  { name: 'react', icon: 'mdi:react' },
  { name: 'astro', icon: 'devicon-plain:astro' },
  { name: 'astro', icon: 'devicon-plain:astro' },
  { name: 'astro', icon: 'devicon-plain:astro' },
  { name: 'astro', icon: 'devicon-plain:astro' },
  { name: 'astro', icon: 'devicon-plain:astro' },
];

export const Skills = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.45'],
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
        {/* <SkillCard skillName='react' icon='mdi:react' />
        <SkillCard skillName='astro' icon='devicon-plain:astro' />
        <SkillCard skillName='typescript' icon='mdi:language-typescript' />
        <SkillCard skillName='javascript' icon='mdi:language-javascript' />
        <SkillCard
          skillName='nextjs'
          icon='devicon-plain:nextjs'
          className='md:col-start-2'
        />
        <SkillCard skillName='typescript' icon='mdi:language-typescript' /> */}
      </div>
    </Section>
  );
};
