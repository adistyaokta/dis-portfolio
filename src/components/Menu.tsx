import { useStore } from '@nanostores/react';
import { contactLink, navLink } from '../types/constant';
import { useLenis } from 'lenis/react';
import { isMenuOpen } from '../stores/app.store';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

type ItemProps = {
  name: string;
  path: string;
  icon?: string;
};

const Item = ({ name, path }: ItemProps) => {
  const lenis = useLenis();
  const $isMenuOpen = useStore(isMenuOpen);
  return (
    <div
      onClick={() => {
        lenis?.scrollTo(`${path}`);
        isMenuOpen.set(!$isMenuOpen);
      }}
      className='size-full md:border-t-2 px-4 md:border-secondary flex items-center justify-end text-5xl md:text-9xl font-black font-raleway leading-normal uppercase hover:tracking-wide hover:md:tracking-widest cursor-pointer transition-all duration-300 delay-150'
    >
      {name}
    </div>
  );
};

const ContactLink = ({ name, path, icon }: ItemProps) => {
  return (
    <a href={path} target='_blank' className='w-1/2 md:w-full px-1'>
      <div className=' md:text-3xl flex justify-center items-center gap-2 font-raleway font-semibold hover:bg-secondary/70 hover:text-primary/90 transition-all duration-300 cursor-pointer'>
        <Icon icon={icon!} className='hidden md:inline-block' />
        <span>{name}</span>
      </div>
    </a>
  );
};

export const Menu = () => {
  return (
    <aside className='h-full flex flex-col justify-between'>
      <div className='h-full flex flex-col'>
        {navLink.map((item) => (
          <Item key={item.name} name={item.name} path={item.path} />
        ))}
      </div>
      <div className='h-fit flex mb-14'>
        <div className='flex flex-wrap md:flex-nowrap w-full'>
          {contactLink.map((item) => (
            <ContactLink name={item.name} path={item.path} icon={item.icon} />
          ))}
        </div>
      </div>
    </aside>
  );
};
