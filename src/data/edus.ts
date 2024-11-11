export type Edu = {
  title: string;
  time: { from: string; to: string };
  content: string;
};

export const edus: Edu[] = [
  {
    title: 'Informatics Engineering',
    time: { from: '2019', to: '2023' },
    content: 'at Universitas 17 Agustus 1945 Surabaya',
  },
];
