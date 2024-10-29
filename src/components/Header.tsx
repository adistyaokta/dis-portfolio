import { useStore } from '@nanostores/react';
import { Menu } from './Menu';
import { Nav } from './Nav';
import { isMenuOpen } from '../stores/app.store';
import { cn } from '../utils/utils';
import { useEffect } from 'react';

export const Header = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <header
      className={cn(
        'fixed w-full h-fit z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-primary/50 border-b border-secondary/70',
        $isMenuOpen && 'h-full bg-primary '
      )}
    >
      <Nav />
      {$isMenuOpen && <Menu />}
    </header>
  );
};
