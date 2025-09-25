import type { Project } from '../types';
import MaxWellEv from '@/../public/assets/images/projects/QuantCoreAI.png';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import MobileVector from '@/../public/assets/icons/deviceVector.svg';

export const QuantCore: Project = {
  id: 4,
  title: 'Finance education and hands-on trading for primary school students',
  subtitle: 'QuantCore AI | Product Design',
  previewTitle: 'QuantCore AI | Product Design',

  description:
    'Quantcore LMS helps students build financial literacy while giving them hands-on experience through simulated stock trading, all within a guided learning environment.',
  category: 'Web Application',
  shortDescription:
    'QuantCore LMS is and interactive financial literacy platform designed for schools, where students can learn about finance, take exams, and experiment with stockThe Maxwell landing page is designed to present a clean, modern, and informative user interface for promoting the company’s electric vehicle (EV) charging solutions. It targets individuals, businesses, and institutions seeking reliable, accessible, and efficient EV infrastructure and mobile app support.',
  image: MaxWellEv,
  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '6 Weeks',
    },
    {
      title: 'Industry',
      description: 'Education',
    },
    { title: 'Platform', description: 'Responsive Web App' },
  ],
  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: MobileVector, label: 'Web App' },
  ],
  overview: [
    'Traditional classroom learning lacks the real-world context that helps students truly grasp financial decision-making, making it difficult to bridge the gap between theory and practice.',
    'Quantcore LMS is an interactive financial literacy platform designed for schools, where students can learn about finance, take exams, and experiment with stock trading using simulated funds. The platform connects students, teachers, and school administrators through a three-tier system, enabling teachers to monitor progress and trading performance while students gain practical experience. By combining theory with safe, hands-on practice, Quantcore prepares students for real-world financial decision-making in a structured, engaging, and risk-free way.',
  ],
  outcome: {
    description:
      'Quantcore LMS equips students with the confidence and skills to understand and navigate financial markets. By combining education with simulated experience, the platform makes financial learning engaging, measurable, and meaningful, preparing students for smarter decisions in the real world.',
    features: [
      {
        bold: 'Three-tier dashboards',
        text: 'Separate views for students, teachers, and school admins',
      },
      {
        bold: 'Interactive learning modules',
        text: 'Students take courses and exams to build financial knowledge.',
      },
      {
        bold: 'Simulated trading',
        text: 'Students practice stock trading with assigned virtual funds.',
      },
      {
        bold: 'Performance tracking',
        text: 'Teachers can monitor student progress, exam results, and trading outcomes.',
      },
      {
        bold: 'Safe experimentation',
        text: ' Students gain practical trading experience without real-world risk.',
      },
    ],
  },
};
