export type Work = {
  title: string;
  time: { from: string; to: string };
  content: string;
};

export const works: Work[] = [
  {
    title: 'Frontend Web Developer',
    time: { from: '2023', to: 'NOW' },
    content: 'at PT Lviors Jaya Sentosa',
  },
  {
    title: 'Frontend Developer Intern',
    time: { from: '2022', to: '2022' },
    content: 'at LPPM Untag Surabaya',
  },
];
