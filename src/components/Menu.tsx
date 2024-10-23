import React from 'react';
import { isMenuOpen } from '../stores/app.store';
import { useStore } from '@nanostores/react';
import { cn } from '../utils/utils';
import { Nav } from './Nav';

export const Menu = () => {
  return (
    <aside className={cn('z-50 flex w-full bg-secondary h-full flex-1 px-2')}>
      <div className='h-1/2 w-full flex flex-col justify-between'>
        <div className='bg-red-800 flex flex-col'>
          <div className='text-7xl md:text-9xl uppercase text-right font-anton cursor-pointer'>
            home
          </div>
          <div className='text-7xl md:text-9xl uppercase text-right font-anton cursor-pointer'>
            project
          </div>
          <div className='text-7xl md:text-9xl uppercase text-right font-anton cursor-pointer'>
            about
          </div>
          <div className='text-7xl md:text-9xl uppercase text-right font-anton cursor-pointer'>
            contact
          </div>
        </div>
        <div className=' bg-teal-800 flex flex-col min-h-full'>
          <div className='flex flex-wrap justify-center items-center mt-auto'>
            <div className='text-lg w-full bg-secondary/80 text-primary'>
              Find me on
            </div>
            <div className='w-1/2 min-h-10 md:min-h-16 flex items-center text-left md:text-4xl border-t cursor-pointer'>
              Email
            </div>
            <div className='w-1/2 min-h-10 md:min-h-16 flex items-center text-left md:text-4xl border-t cursor-pointer'>
              Linkedin
            </div>
            <div className='w-1/2 min-h-10 md:min-h-16 flex items-center text-left md:text-4xl border-t cursor-pointer'>
              Github
            </div>
            <div className='w-1/2 min-h-10 md:min-h-16 flex items-center text-left md:text-4xl border-t cursor-pointer'>
              Instagram
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
