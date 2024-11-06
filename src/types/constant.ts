export const navLink = [
  { name: 'home', path: '/' },
  { name: 'project', path: '/projects' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
] as const;
export type NavLink = (typeof navLink)[number];

export const contactLink = [
  { name: 'email', path: '/email' },
  { name: 'linkedin', path: '/linkedin' },
  { name: 'github', path: '/github' },
  { name: 'instagram', path: '/instagram' },
] as const;
export type ContactLink = (typeof contactLink)[number];
