import AdobeIllustrator from '/assets/icons/Adobe_Illustrator.svg';
import Jira from '/assets/icons/Jira.svg';
import Framer from '/assets/icons/Framer.svg';
import Design from '/assets/icons/designVector.svg';
import Layers from '/assets/icons/Layers.svg';
import Global from '/assets/icons/Global.svg';
import Settings from '/assets/icons/Settings.svg';
import Figma from '/assets/icons/Figma.svg';
import Smartphone from '/assets/icons/deviceVector.svg';

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
