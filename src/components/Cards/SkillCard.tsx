import { Icon } from '@iconify-icon/react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { cn } from '../../utils/utils';

type SkillCardProps = {
  skillName: string;
  icon: string;
  className?: string;
  iconSize?: number;
  progress: MotionValue;
  range: number[];
};

export const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  icon,
  className = '',
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const x = useTransform(progress, range, [-100, 0]);
  return (
    <motion.div
      style={{
        opacity,
        x,
      }}
      className={cn(
        'relative group w-full min-h-40 md:min-h-72 max-h-40 aspect-square flex flex-col p-1 gap-1 bg-secondary truncate overflow-hidden',
        className
      )}
    >
      <Icon
        icon={icon}
        height={75}
        className={
          'flex-1 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary/95 transition-all duration-200 delay-75'
        }
      />
      <div className='w-full min-h-8 max-h-8 md:min-h-16 bg-primary flex justify-center items-center font-orbitron font-bold uppercase text-sm md:text-xl lg:text-4xl md:tracking-widest truncate'>
        {skillName}
      </div>
    </motion.div>
  );
};
