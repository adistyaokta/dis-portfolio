import { ReactLenis, useLenis } from 'lenis/react';
import type React from 'react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 3,
        smoothWheel: true,
      }}
    >
      <div className='min-h-full flex flex-col gap-14 md:gap-40 px-2 md:px-10'>
        {children}
      </div>
    </ReactLenis>
  );
};
