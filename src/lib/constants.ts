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
type Tool = {
  Icon: string;
  name: string;
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
