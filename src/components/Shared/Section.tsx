import type React from 'react';
import { cn } from '../../utils/utils';

type SectionProps = {
  title: string;
  reverse?: boolean;
  children: React.ReactNode;
};

export const Section = ({ title, reverse, children }: SectionProps) => {
  const letters = Array.from(title);
  return (
    <section className='w-full min-w-full min-h-full flex flex-col md:gap-4 py-2'>
      <h2
        className={cn(
          'capitalize font-extrabold text-xl md:text-5xl',
          reverse && 'text-right'
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
