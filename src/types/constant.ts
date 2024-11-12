export const navLink = [
  { name: 'home', path: '#home' },
  { name: 'project', path: '#projects' },
  { name: 'about', path: '#about' },
  { name: 'experience', path: '#experience' },
  // { name: 'contact', path: '#contact' },
] as const;
export type NavLink = (typeof navLink)[number];

export const contactLink = [
  { name: 'Email', path: 'mailto:adiztya77@gmail.com', icon: 'mdi:email' },
  {
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/adistyaoktaviano',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Github',
    path: 'https://github.com/adistyaokta',
    icon: 'jam:github',
  },
  {
    name: 'Resume',
    path: '/CV_AdistyaOkta.pdf',
    icon: 'mdi:file-document',
  },
  // {
  //   name: 'instagram',
  //   path: 'https://www.instagram.com/adstyx_/',
  //   icon: 'mdi:instagram',
  // },
] as const;
export type ContactLink = (typeof contactLink)[number];
