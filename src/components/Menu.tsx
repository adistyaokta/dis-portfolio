import React from 'react';
import { isMenuOpen } from '../stores/app.store';
import { useStore } from '@nanostores/react';
import { cn } from '../utils/utils';
import { Nav } from './Nav';

export const Menu = () => {
  return (
    <aside
      className={cn(
        'sticky top-0 h-full flex flex-col justify-between overflow-hidden'
      )}
    >
      <div className=' flex flex-col'>
        <div className='text-7xl md:text-9xl h-20 md:h-full max-w-full w-full flex items-center justify-end uppercase font-extrabold hover:tracking-wider transition-all duration-300 ease-in-out'>
          home
        </div>
        <div className='text-7xl md:text-9xl h-20 md:h-full max-w-full w-full flex items-center justify-end uppercase font-extrabold hover:tracking-wider transition-all duration-300 ease-in-out'>
          project
        </div>
        <div className='text-7xl md:text-9xl h-20 md:h-full max-w-full w-full flex items-center justify-end uppercase font-extrabold hover:tracking-wider transition-all duration-300 ease-in-out'>
          about
        </div>
        <div className='text-7xl md:text-9xl h-20 md:h-full max-w-full w-full flex items-center justify-end uppercase font-extrabold hover:tracking-wider transition-all duration-300 ease-in-out'>
          contact
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-lg w-full bg-secondary/80 text-primary'>
          Find me on
        </div>
        <div className='flex flex-wrap justify-center items-center mt-auto'>
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
    </aside>
  );
};
