import type { Project } from '../types';
import LaxmiiThumbnail from '@/../public/assets/images/projects/laxmii.webp';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import MobileVector from '@/../public/assets/icons/deviceVector.svg';
import LaxmiiMockupLarge from '@/../public/assets/images/projects/laxmii-mockup.png';
import LaxmiiMockupSmall from '@/../public/assets/images/projects/laxmii-mockup-sm.png';
import LaxmiiChartsLarge from '@/../public/assets/images/projects/laxmii-mockup-charts.png';
import LaxmiiChartsSmall from '@/../public/assets/images/projects/laxmii-mockup-charts-sm.png';
import LaxmiiHomeScreenLarge from '@/../public/assets/images/projects/laxmii-home-screen.png';
import LaxmiiHomeScreenSmall from '@/../public/assets/images/projects/laxmii-home-screen-sm.png';
import LaxmiiFontsLarge from '@/../public/assets/images/projects/laxmii-font.png';
import LaxmiiFontsSmall from '@/../public/assets/images/projects/laxmii-font-sm.png';
import LaxmiiColorsSmall from '@/../public/assets/images/projects/laxmii-colors-sm.png';
import LaxmiiColorsLarge from '@/../public/assets/images/projects/laxmii-colors.png';
import LaxmiiPresentationLarge from '@/../public/assets/images/projects/laxmii-presentation.png';
import LaxmiiPresentationSmall from '@/../public/assets/images/projects/laxmii-presentation-sm.png';
import TimelineImageLarge from '@/../public/assets/images/projects/laxmii-project-timeline.png';
import TimelineImageSmall from '@/../public/assets/images/projects/laxmii-project-timeline-sm.png';

export const Laxmii: Project = {
  id: 3,
  title: 'Smart AI-powered financial assistant for effortless money management',
  subtitle: 'Laxmii',
  previewTitle: 'LAXMII | UI/UX Design',
  description:
    'With LAXMII, users can track spending, automate savings, and gain actionable insights, all guided by AI to simplify their financial life.',
  category: 'Mobile Application',
  shortDescription:
    'Laxmii is an AI-driven financial management app designed to help users take control of their money without stresshe Maxwell landing page is designed to present a clean, modern, and informative user interface for promoting the company’s electric vehicle (EV) charging solutions. It targets individuals, businesses, and institutions seeking reliable, accessible, and efficient EV infrastructure and mobile app support.',
  image: LaxmiiThumbnail,

  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '4 Weeks',
    },
    {
      title: 'Industry',
      description: 'Fintech AI',
    },
    { title: 'Platform', description: 'Mobile App' },
  ],

  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: MobileVector, label: 'Mobile App' },
  ],
  overview: [
    'Many people in the UK struggle to manage their finances effectively. Tracking expenses, setting aside savings, and making informed financial decisions can be confusing and time-consuming, often leading to stress or missed opportunities.',
    'LAXMII is an AI-driven financial management app designed to help users take control of their money without stress. By analyzing spending habits, suggesting savings opportunities, and providing clear insights, LAXMII turns complex finances into simple, actionable steps. Whether it’s planning for monthly expenses, setting savings goals, or understanding spending patterns, the app empowers users to make smarter decisions while keeping their financial journey intuitive and manageable.',
  ],
  outcome: {
    description:
      'LAXMII provides an intelligent, easy-to-use platform where AI guides users through budgeting, savings, and spending analysis. It offers personalized suggestions and real-time insights, helping users take control of their financial health effortlessly.',
    features: [
      {
        bold: 'AI-driven insights',
        text: 'Personalized recommendations based on spending habits.',
      },
      {
        bold: 'Automated savings',
        text: 'Set and track savings goals effortlessly.',
      },
      {
        bold: 'Expense tracking',
        text: 'Monitor spending in real time.',
      },
      {
        bold: 'Financial dashboard',
        text: 'Key medical information is extracted and ready for EHR transfer.',
      },
      {
        bold: 'Net-worth calculator',
        text: 'Calculates and updates user’s Net-worth in real time',
      },
    ],
  },
  mockupImages: {
    sm: LaxmiiMockupSmall,
    lg: LaxmiiMockupLarge,
  },
  outcomeImages: {
    sm: [
      {
        src: LaxmiiChartsSmall,
        fullWidth: true,
        height: '500px',
      },
      {
        src: LaxmiiHomeScreenSmall,
        fullWidth: true,
        height: '500px',
      },
      {
        src: LaxmiiPresentationSmall,
        fullWidth: true,
      },
    ],
    lg: [
      {
        src: LaxmiiChartsLarge,
        fullWidth: false,
      },
      {
        src: LaxmiiHomeScreenLarge,
        fullWidth: false,
      },
      {
        src: LaxmiiPresentationLarge,
        fullWidth: true,
      },
    ],
  },
  designChoiceImages: {
    sm: {
      font: LaxmiiFontsSmall,
      colors: LaxmiiColorsSmall,
    },
    lg: {
      font: LaxmiiFontsLarge,
      colors: LaxmiiColorsLarge,
    },
  },
  timeLineImage: {
    lg: TimelineImageLarge,
    sm: TimelineImageSmall,
  },
};
