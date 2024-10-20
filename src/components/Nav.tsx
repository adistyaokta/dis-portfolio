import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { isMenuOpen } from '../stores/app.store';
import { Menu } from './Menu';
import { cn } from '../utils/utils';

export const Nav = () => {
  const $isMenuOpen = useStore(isMenuOpen);
  const toggleMenu = () => {
    isMenuOpen.set(!$isMenuOpen);
  };

  useEffect(() => {
    if ($isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [$isMenuOpen]);

  return (
    <div className={cn('flex flex-col size-full', $isMenuOpen && 'min-h-full')}>
      <nav className='w-full min-w-full flex justify-between items-center px-1 py-2'>
        <div className='w-1/3 h-10 max-h-10 flex items-center justify-start font-raleway font-semibold text-xl md:text-5xl'>
          /
        </div>
        <div className='w-1/3 h-10 max-h-10 flex items-center justify-center font-jersey text-3xl md:text-7xl font-semibold tracking-wide'>
          dis
        </div>
        <div
          onClick={toggleMenu}
          className='w-1/3 h-10 max-h-10 flex items-center justify-end font-raleway font-semibold text-xl md:text-3xl uppercase cursor-pointer select-none'
        >
          {$isMenuOpen ? 'Close' : 'Menu'}
        </div>
      </nav>
      {$isMenuOpen && <Menu />}
    </div>
  );
};
