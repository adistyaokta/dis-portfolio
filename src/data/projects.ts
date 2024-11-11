import type { ImageMetadata } from 'astro';
import discoverImage from '../assets/projects/discover-1.png';
import gastritisWebImage from '../assets/projects/gastritis-web-1.png';
import gastritisImage from '../assets/projects/gastritis.webp';
import xanaMovieImage from '../assets/projects/xanamovie.webp';

export type Project = {
  title: string;
  tag: string[];
  image: ImageMetadata;
  path?: string;
  github?: string
};

export const projects: Project[] = [
  {
    title: 'discover!',
    tag: ['Typescript', 'React', 'NestJs'],
    image: discoverImage,
    path: 'https://dis-cover.vercel.app/',
    github: 'https://github.com/adistyaokta/discover-fe'
  },
  {
    title: 'gastritis diagnosis web ver.',
    tag: ['PHP', 'Javascript', 'React', 'Laravel'],
    image: gastritisWebImage,
    path: '',
    github: 'https://github.com/adistyaokta/Gastritis-Diagnosis-Web/'
  },
  {
    title: 'gastritis diagnosis',
    tag: ['Java', 'Android', 'Expert System'],
    image: gastritisImage,
    path: '',
    github: 'https://github.com/adistyaokta/GastritisDiagnosis/',
  },
  {
    title: 'xana movie space',
    tag: ['Javascript', 'React'],
    image: xanaMovieImage,
    path: 'https://xana-movie-space.vercel.app/',
    github: 'https://github.com/adistyaokta/xana-movie-space'
  },
];
