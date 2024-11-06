import React from 'react';
import { Icon } from '@iconify-icon/react';
import { cn } from '../../utils/utils';
import { motion, MotionValue, useTransform } from 'framer-motion';

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
  iconSize = 50,
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
      // transition={{
      //   duration: 5,
      // }}
      className={cn(
        'relative w-full min-h-40 md:min-h-72 max-h-40 aspect-square flex flex-col p-1 gap-1 bg-secondary/95',
        className
      )}
    >
      <div className='flex-1 flex justify-center items-center'>
        <Icon
          icon={icon}
          className={'scale-[5.5] text-[#1E1E1C] md:scale-[10]'}
        />
      </div>
      <div className='w-full min-h-8 max-h-8 md:min-h-16 bg-primary flex justify-center items-center font-semibold uppercase text-sm md:text-3xl md:tracking-widest'>
        {skillName}
      </div>
    </motion.div>
  );
};
