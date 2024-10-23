// import { useStore } from '@nanostores/react';
// import { useEffect, useState } from 'react';
// import { isMenuOpen } from '../stores/app.store';
// import { Menu } from './Menu';
// import { cn } from '../utils/utils';

// export const Nav = () => {
//   const $isMenuOpen = useStore(isMenuOpen);
//   const toggleMenu = () => {
//     isMenuOpen.set(!$isMenuOpen);
//   };

//   return (
//     <div
//       className={cn(
//         'flex flex-col size-full bg-primary relative',
//         $isMenuOpen && 'min-h-full w-full'
//       )}
//     >
//       {!$isMenuOpen && (
//         <nav className='w-full min-w-full flex max-h-10 md:max-h-full justify-between items-center p-5 fixed top-0 mx-auto'>
//           <div className='w-full h-10 max-h-10 flex items-center justify-start font-jersey font-semibold text-xl md:text-5xl'>
//             dis
//           </div>
//           <div
//             onClick={toggleMenu}
//             className='w-full h-10 max-h-10 flex items-center justify-end font-raleway font-semibold text-xl md:text-3xl uppercase cursor-pointer select-none'
//           >
//             {$isMenuOpen ? 'Close' : 'Menu'}
//           </div>
//         </nav>
//       )}
//       {$isMenuOpen && <Menu />}
//     </div>
//   );
// };


import { useStore } from '@nanostores/react';
import React from 'react'
import { isMenuOpen } from '../stores/app.store';

export const Nav = () => {
  const $isMenuOpen = useStore(isMenuOpen);
  const toggleMenu = () => {
    isMenuOpen.set(!$isMenuOpen);
    console.log('a')
  };

  return (
    <nav className='min-h-10 md:h-14 w-full flex justify-between items-center px-2 text-secondary bg-transparent'>
      <div className='font-jersey text-3xl'>dis</div>
      <div className='uppercase font-raleway font-bold text-xl md:text-4xl cursor-pointer' onClick={toggleMenu}>Menu</div>
    </nav>
  )
}
