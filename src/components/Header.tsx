import { useStore } from '@nanostores/react';
import { Menu } from './Menu'
import { Nav } from './Nav'
import { isMenuOpen } from '../stores/app.store';
import { cn } from '../utils/utils';

export const Header = () => {
    const $isMenuOpen = useStore(isMenuOpen);

  return (
    <header className={cn('bg-primary fixed w-full h-fit z-50', $isMenuOpen && 'h-full')}>
        <Nav />
        {$isMenuOpen && <Menu />}
    </header>
  )
}
