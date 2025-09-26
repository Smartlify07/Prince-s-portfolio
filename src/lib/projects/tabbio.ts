import type { Project } from '../types';
import TabbioImage from '/public/assets/images/projects/tabbio.webp';
import DesignVector from '/public/assets/icons/designVector.svg';
import Figma from '/public/assets/icons/Figma.svg';
import Layers from '/public/assets/icons/Layers.svg';
import Laptop from '/public/assets/icons/laptop.svg';

export const Tabbio: Project = {
  id: 5,
  title: 'Reimagining recruitment with smart CVs and seamless talent matching',
  previewTitle: 'Tabbio | UI/UX Design',
  subtitle: 'Tabbio',
  description:
    'Tabbio helps job seekers create smart CVs in seconds while giving recruiters an intuitive platform to track applications and find the right talent.',
  category: 'Web Application',
  image: TabbioImage,
  shortDescription:
    'Tabbio is a two-sided recruitment platform to make hiring process smarter and faster for both job seekers  and recruiters',
  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '10 Weeks',
    },
    {
      title: 'Industry',
      description: 'HR Tech/ Recruitment',
    },
    { title: 'Platform', description: 'Responsive Web App' },
  ],
  overview: [
    'Traditional recruitment processes are often slow, impersonal, and frustrating. Job seekers struggle to stand out with static CVs, while recruiters are overwhelmed by irrelevant applications and inefficient tracking tools, making it hard to find the right talent.',
    'Tabbio is a two-sided recruitment platform designed to make the hiring process smarter and faster for both job seekers and recruiters. Job seekers can ditch traditional CVs and create intelligent profiles in seconds, explore job boards, apply for roles, and track their applications effortlessly. Recruiters benefit from a personalized career page, efficient application tracking, and smart talent matching, reducing spam and improving the quality of hires. By connecting talent and opportunities in a meaningful way, Tabbio makes recruitment less stressful, more efficient, and more human.',
  ],
  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: Laptop, label: 'Web App' },
  ],
  outcome: {
    description:
      'With Tabbio, job seekers can showcase their skills more effectively and find better opportunities faster. Recruiters can focus on the right candidates without being bogged down by spam or inefficiency. The platform makes the recruitment experience smarter, faster, and more satisfying for everyone involved.',
    features: [
      {
        bold: 'Generate professional, optimized CVs in seconds.',
        text: 'Smart CV Creation',
      },
      {
        bold: 'Job matching',
        text: ' AI-powered suggestions to connect candidates with relevant roles.',
      },
      {
        bold: 'Application tracking',
        text: 'Keep tabs on every application from submission to outcome.',
      },
      {
        bold: 'Recruiter dashboard',
        text: 'Personalized career pages and easy candidate management.',
      },
      {
        bold: 'Talent matching',
        text: 'Help recruiters find the right candidates efficiently.',
      },
    ],
  },
};
