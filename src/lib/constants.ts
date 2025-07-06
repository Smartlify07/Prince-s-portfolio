import AdobeIllustrator from '../../public/assets/icons/Adobe_Illustrator.svg';
import Jira from '../../public/assets/icons/Jira.svg';
import Framer from '../../public/assets/icons/Framer.svg';
import Design from '../../public/assets/icons/designVector.svg';
import Layers from '../../public/assets/icons/Layers.svg';
import Global from '../../public/assets/icons/Global.svg';
import Settings from '../../public/assets/icons/Settings.svg';
import Figma from '../../public/assets/icons/Figma.svg';
import Smartphone from '../../public/assets/icons/deviceVector.svg';
import Amaka from '../../public/assets/images/testimonials/amaka.png';
import TymeTech from '../../public/assets/images/testimonials/tyme.png';

import BusBooks from '../../public/assets/images/projects/busbooks.png';
import VifZack from '../../public/assets/images/projects/Vifzack 1.png';
import BlesSoftware from '../../public/assets/images/projects/Bles Software 1.png';
import MaxWellEv from '../../public/assets/images/projects/Maxwell Landing Page.png';
import KaleriAi from '../../public/assets/images/projects/Kaleri 1.png';
import CrawlerAI from '../../public/assets/images/projects/Crawler 2.png';
type Tool = {
  Icon: string;
  name: string;
};
type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
};
export const tools: Tool[] = [
  {
    Icon: Design,
    name: 'UX Design',
  },

  {
    Icon: Layers,
    name: 'UI Design',
  },

  {
    Icon: Global,
    name: 'Web Design',
  },

  {
    Icon: Jira,
    name: 'Jira',
  },

  {
    Icon: Smartphone,
    name: 'Mobile App',
  },
  {
    Icon: Settings,
    name: 'Research',
  },

  {
    Icon: Figma,
    name: 'Figma',
  },

  {
    Icon: Framer,
    name: 'Framer',
  },

  {
    Icon: AdobeIllustrator,
    name: 'Adobe Illustrator',
  },
];

export const testimonials = [
  {
    name: 'Amaka I.',
    position: 'Product Manager at Tymetech',
    testimonial:
      'Ezekiel didn’t just design our product — he transformed it. Every screen now feels intentional and user-focused. Working with him was one of the best decisions we made for our MVP.',
    images: [Amaka, TymeTech],
  },
];

export const projects: Project[] = [
  {
    title: 'BusBooks',
    description:
      'BusBooks is a cloud-based billing tool for transport providers. It simplifies how companies manage and invoice trips with flexible models.',
    category: 'Web Application',
    image: BusBooks,
  },
  {
    title: 'Vifzack',
    description:
      'Vifzack is a scalable SaaS platform designed to unify multiple communication channels, including WhatsApp, Email, LinkedIn, and Newsletters, into a single, streamlined inbox, while also offering secure document management via AWS cloud.\n The platform includes features such as AI-powered chat handling, role-based access control, real-time task tracking, intelligent search, and multi-language support. Tailored especially for professionals like real estate agents, Vifzack simplifies complex communication workflows and ensures data is easily accessible, secure, and organized. ',
    category: 'Web Application',
    image: VifZack,
  },
  {
    title: 'Bles Software -  (Clutch Landing Page)',
    description:
      'The Bles Software landing page is a modern, conversion-focused website designed to help the company attract and engage potential clients looking to outsource software development. The design emphasizes trust, professionalism, and seamless communication, guiding visitors to either view pricing or book a paid consultation.',
    category: 'Website',
    image: BlesSoftware,
  },
  {
    title: 'Maxwell EV Charging - (Landing Page)',
    description:
      'The Maxwell landing page is designed to present a clean, modern, and informative user interface for promoting the company’s electric vehicle (EV) charging solutions. It targets individuals, businesses, and institutions seeking reliable, accessible, and efficient EV infrastructure and mobile app support.',
    category: 'Website',
    image: MaxWellEv,
  },
  {
    title: 'Kaleri AI Health Management App',
    description:
      'Kaleri AI is a data-driven weight management application that leverages artificial intelligence to deliver sustainable health outcomes. The app is designed to support users on their weight loss journey through personalized insights, motivational feedback, and progress tracking.',
    category: 'Mobile Application',
    image: KaleriAi,
  },
  {
    title: 'Crawler (AI-Powered Site Analysis)',
    description:
      'Monitor your website’s performance by tracking IP addresses, managing content that violates Google policies, and optimizing ad placements for increased revenue—all while leveraging AI to enhance your content strategy.',
    category: 'Web Application',
    image: CrawlerAI,
  },
];
