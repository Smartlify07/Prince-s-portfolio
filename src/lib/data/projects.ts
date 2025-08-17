import LearningSite from '/assets/images/projects/learn-web.png';
import Bike from '/assets/images/projects/bike.png';
import ProductPage from '/assets/images/projects/product-page.png';
import SonyWebsite from '/assets/images/projects/sony-website.png';
import KiaMotors from '/assets/images/projects/kia-motors.png';
import SaasWeb from '/assets/images/projects/saas-web.png';
import ExpenseMaster from '/assets/images/projects/expense-master.png';
import Tabbio from '/assets/images/projects/tabbio.png';

type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
};
export const projects: Project[] = [
  {
    title: 'BusBooks',
    description:
      'BusBooks is a cloud-based billing tool for transport providers. It simplifies how companies manage and invoice trips with flexible models.',
    category: 'Web Application',
    image: LearningSite,
  },
  {
    title: 'Vifzack',
    description:
      'Vifzack is a scalable SaaS platform designed to unify multiple communication channels, including WhatsApp, Email, LinkedIn, and Newsletters, into a single, streamlined inbox, while also offering secure document management via AWS cloud.\n The platform includes features such as AI-powered chat handling, role-based access control, real-time task tracking, intelligent search, and multi-language support. Tailored especially for professionals like real estate agents, Vifzack simplifies complex communication workflows and ensures data is easily accessible, secure, and organized. ',
    category: 'Web Application',
    image: Bike,
  },
  {
    title: 'Product Page | UI/UX Design',
    description:
      'The Bles Software landing page is a modern, conversion-focused website designed to help the company attract and engage potential clients looking to outsource software development. The design emphasizes trust, professionalism, and seamless communication, guiding visitors to either view pricing or book a paid consultation.',
    category: 'Website',
    image: ProductPage,
  },
  {
    title: 'Sony CH520 | Landing Lage',
    description:
      'The Maxwell landing page is designed to present a clean, modern, and informative user interface for promoting the company’s electric vehicle (EV) charging solutions. It targets individuals, businesses, and institutions seeking reliable, accessible, and efficient EV infrastructure and mobile app support.',
    category: 'Website',
    image: SonyWebsite,
  },
  {
    title: 'KIA Motors | UI/UX Design',
    description:
      'Kaleri AI is a data-driven weight management application that leverages artificial intelligence to deliver sustainable health outcomes. The app is designed to support users on their weight loss journey through personalized insights, motivational feedback, and progress tracking.',
    category: 'Mobile Application',
    image: KiaMotors,
  },
  {
    title: 'SAAS Web | UI/UX Design',
    description:
      'Monitor your website’s performance by tracking IP addresses, managing content that violates Google policies, and optimizing ad placements for increased revenue—all while leveraging AI to enhance your content strategy.',
    category: 'Web Application',
    image: SaasWeb,
  },
  {
    title: 'ExpenseMaster | UI/UX Design',
    description:
      'ExpenseMaster is a financial planning tool that helps users keep track of their spending and savings effortlessly.',
    category: 'Web Application',
    image: ExpenseMaster,
  },
  {
    title: 'Tabbio Smart CV | UI/UX Design',
    description:
      'Tabbio Smart CV is a financial management solution that assists users in tracking their expenses and savings with ease.',
    category: 'Web Application',
    image: Tabbio,
  },
];
