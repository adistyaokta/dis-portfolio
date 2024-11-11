export const navLink = [
  { name: 'home', path: '#home' },
  { name: 'project', path: '#projects' },
  { name: 'about', path: '#about' },
  { name: 'experience', path: '#experience' },
  // { name: 'contact', path: '#contact' },
] as const;
export type NavLink = (typeof navLink)[number];

export const contactLink = [
  { name: 'email', path: 'mailto:adiztya77@gmail.com', icon: 'mdi:email' },
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/in/adistyaoktaviano',
    icon: 'mdi:linkedin',
  },
  {
    name: 'github',
    path: 'https://github.com/adistyaokta',
    icon: 'mdi:github',
  },
  // {
  //   name: 'instagram',
  //   path: 'https://www.instagram.com/adstyx_/',
  //   icon: 'mdi:instagram',
  // },
] as const;
export type ContactLink = (typeof contactLink)[number];
