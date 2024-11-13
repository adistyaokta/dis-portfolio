import { cn } from '../../utils/utils';

type TimelineCardProps = {
  index: number;
  time: {
    from: string;
    to: string;
  };
  title: string;
  content: string;
};

export const TimelineCard = ({
  content,
  index,
  time,
  title,
}: TimelineCardProps) => {
  const odd = index % 2 === 0;

  return (
    <div
      className={cn(
        'h-12 md:h-fit md:max-h-full w-full flex justify-between items-center divide-x-2',
        odd
          ? 'text-primary bg-secondary/95 divide-primary'
          : 'text-secondary bg-primary/95 '
      )}
    >
      <div
        className={cn(
          'text-base w-1/4 lg:w-1/5 2xl:w-1/6 md:text-4xl xl:text-5xl h-full flex justify-center items-center px-1 md:px-4 md:justify-between font-anton tracking-wide'
        )}
      >
        <p className='md:w-1/2 text-right md:px-2'>{time.from}</p>
        <p className='w-1/2 text-center'>{'-'}</p>
        <p className='md:w-1/2 text-right md:px-2'>{time.to}</p>
      </div>
      <div
        className={cn(
          'flex-1 h-full flex flex-col items-start justify-center pl-2 py-2'
        )}
      >
        <p className='uppercase font-anton text-2xl md:text-5xl xl:text-8xl'>
          {title}
        </p>
        <p className='font-normal text-xs md:text-3xl'>{content}</p>
      </div>
    </div>
  );
};
