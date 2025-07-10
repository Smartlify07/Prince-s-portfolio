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

import ResearchIcon from '../../public/assets/images/services/Research Image.svg';
import Conceptualize from '../../public/assets/images/services/Conceptualize Image.svg';
import Testing from '../../public/assets/images/services/UX Testing Image.svg';
import Implement from '../../public/assets/images/services/Implement Image.svg';

import HealthCareIcon from '../../public/assets/images/services/Healthcare Image.svg';
import FintechIcon from '../../public/assets/images/services/Fintech Image.svg';
import FitnessIcon from '../../public/assets/images/services/Health & Fitness Image.svg';
import EdTech from '../../public/assets/images/services/EdTech Image.svg';
import FashionDesign from '../../public/assets/images/services/Fashion & Design Image.svg';
import Food from '../../public/assets/images/services/Food & Restaurant Image.svg';
import Lawyers from '../../public/assets/images/services/Lawyers & Attorneys Image.svg';
import Commerce from '../../public/assets/images/services/Retail & Ecommerce Image.svg';
import NonProfit from '../../public/assets/images/services/Non-Profit Organizations Image.svg';

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

export const exclusiveDeals = [
  {
    title: 'User-Centered Design',
    description:
      'Embrace a truly user-centered approach that drives higher satisfaction, deeper engagement, and intuitive product designs that show your users they’re genuinely valued. Our UX design process is rooted in empathy and precision—prioritizing your target audience’s thoughts, behaviors, needs, and motivations to create experiences that resonate, convert, and build lasting loyalty.',
    image: '',
  },
  {
    title: 'Innovative Solutions',
    description:
      'Bring your visionary designs to life with cutting-edge UI/UX features like animated microinteractions, multimodal interfaces, parallax scrolling, and location-based experiences. Leverage the latest in design frameworks, wireframing tools, advanced editing software, and generative AI to create immersive, intuitive, and future-ready digital products that captivate users and set your brand apart.',
    image: '',
  },
];

export const designProcesses = [
  {
    title: 'Research',
    list: [
      'Develop User Personas',
      'Create Customer Journey Maps',
      'Define Business Requirements',
      'Perform Card Sorting',
      'Organize Focus Groups',
    ],
    icon: ResearchIcon,
  },
  {
    title: 'Conceptualize',
    list: [
      'User flow diagram',
      'Develop Information Architecture',
      'Moodboard',
      'Lo-fi Prototypes',
      'Create Wireframes',
    ],
    icon: Conceptualize,
  },
  {
    title: 'UX Testing',
    list: [
      'Evaluate Accessibility',
      'Assess Emotional Responses',
      'Conduct Usability Testing',
    ],
    icon: Testing,
  },

  {
    title: 'Implement',
    list: [
      'Visual Design',
      'Ensure Design Quality Control',
      'Perform Iterations,',
    ],
    icon: Implement,
  },
];

type Industry = {
  icon: string;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    icon: HealthCareIcon,
    title: 'Healthcare',
    description:
      'My UI/UX design services can be customized to provide specialized and engaging web designs that meet your specific needs. These indispensable tools are suitable for both patients and physicians.',
  },
  {
    icon: FintechIcon,
    title: 'Fintech',
    description:
      'My user-centered design (UCD) approach helps many banking and finance firms to shine in the competitive landscape by creating digital products that make use of the latest technology. Stay ahead in financial services with our innovative UI/UX web design services.',
  },
  {
    icon: FitnessIcon,
    title: 'Health & Fitness',
    description:
      'Navigate the digital health revolution by providing you with a comprehensive and user-friendly website design that will make it easy for your customers to access your services. With my expertise in web design, I can create a responsive and engaging platform that will showcase your health and fitness brand in the best possible light. brand to the next level.',
  },
  {
    icon: EdTech,
    title: 'EdTech',
    description:
      'I design engaging e-learning interfaces to enhance interactive learning experiences, deliver personalized content, and foster student-teacher collaboration, transforming education.',
  },
  {
    icon: FashionDesign,
    title: 'Fashion & Design',
    description:
      'I design digital solutions in terms of UI/UX design services to help captivate audiences, showcase products beautifully, and enable effortless online shopping experiences.',
  },
  {
    icon: Food,
    title: 'Food & Restaurant',
    description:
      'Deliver unparalleled convenience to your food business with premium UI design solutions. Enhance your food-based startup’s reputation by providing seamless digital experiences through my expert mobile and web app designs.',
  },

  {
    icon: Lawyers,
    title: 'Lawyers & Attorneys',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: Commerce,
    title: 'Retail & Ecommerce',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: NonProfit,
    title: 'Non-Profit Organizations',
    description: `Forge the future of your non-profit organization with my innovative mobile app UI/UX design services. Connect and mobilize your NGO's target audience, promoting a lasting impact and global reach.`,
  },
];

export const pricing = [
  {
    title: 'Full Time UI/UX design',
    list: [
      'Design support — 40 hrs/week',
      'UI/UX design for web & mobile',
      'Collaboration via Slack, Zoom, or your tools',
      'Fast iteration cycles for agile teams',
      'User research, wireframes, and prototypes',
      'Design system setup or upkeep',
      'Brand consistency across screens',
      'Developer handoff and design QA',
      'Priority access & quick turnaround',
      'Monthly flat rate or contract billing',
    ],
  },

  {
    title: 'Framer Design',
    list: [
      'Tailored Framer website design to fit your brand.',
      'Responsive layouts for all devices.',
      'Up to 3 revisions included',
      'User-friendly CMS for easy content management.',
      'Engaging animations for a modern user experience.',
      'Figma to Framer handoff for separate designs.',
      'Optimized for fast loading.',
      'No-code handoff for easy content updates.',
      'Flexible support options to suit your needs.',
    ],
  },
  {
    title: 'Freelance',
    list: [
      'One-time project with clear scope and fixed deliverables.',
      'Custom UI/UX design for web or mobile.',
      'Visuals that reflect your brand and engage users.',
      '2–4 revision rounds to refine your vision.',
      'Quick turnaround to meet your launch goals.',
      'Flat-rate or milestone pricing options.',
    ],
  },
];
