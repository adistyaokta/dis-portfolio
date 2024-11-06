import { contactLink, navLink } from '../types/constant';

const Item = ({ name, path }: { name: string; path?: string }) => {
  return (
    <a href={path} className='size-full'>
      <div className='size-full border-b-2 flex items-center justify-end text-7xl font-black font-raleway leading-normal uppercase hover:tracking-wide hover:md:tracking-widest transition-all duration-300'>
        {name}
      </div>
    </a>
  );
};

const ContactLink = ({ name, path }: { name: string; path?: string }) => {
  return (
    <div className='w-full text-left md:text-3xl font-raleway font-semibold border-l border-b border-secondary/70 px-1 hover:bg-secondary/70 hover:text-primary/90 transition-all duration-300'>
      {name}
    </div>
  );
};

export const Menu = () => {
  return (
    <aside className='max-h-[90%] h-full flex flex-col justify-between px-2 text-secondary bg-primary'>
      <div className='h-3/4 w-full flex flex-col items-end justify-center gap-2'>
        {navLink.map((item) => (
          <Item name={item.name} path={item.path} />
        ))}
      </div>
      <div className='h-fit flex flex-col justify-end gap-4'>
        <div className='font-bold font-raleway uppercase md:text-4xl text-primary bg-secondary/60 selection:bg-secondary'>
          Find me on
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {contactLink.map((item) => (
            <ContactLink name={item.name} path={item.path} />
          ))}
        </div>
      </div>
    </aside>
  );
};
