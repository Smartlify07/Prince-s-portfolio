import type { Project } from '../types';
import AbletonImage from '@/../public/assets/images/projects/Ableton.webp';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Laptop from '@/../public/assets/icons/laptop.svg';

import AbletonDisplayLarge from '@/../public/assets/images/projects/ableton-display.png';
import AbletonDisplaySmall from '@/../public/assets/images/projects/ableton-display-sm.png';
import AbletonColorsLarge from '@/../public/assets/images/projects/ableton-colors.png';
import AbletonColorsSmall from '@/../public/assets/images/projects/ableton-colors-sm.png';
import AbletonSlantPresentationLarge from '@/../public/assets/images/projects/ableton-slant-presentation.png';
import AbletonSlantPresentationSmall from '@/../public/assets/images/projects/ableton-slant-presentation-sm.png';
import AbletonFontsLarge from '@/../public/assets/images/projects/ableton-fonts.png';
import AbletonFontsSmall from '@/../public/assets/images/projects/ableton-fonts-sm.png';
import AbletonInUseLarge from '@/../public/assets/images/projects/ableton-in-use.png';
import AbletonInUseSmall from '@/../public/assets/images/projects/ableton-in-use-sm.png';
import TimelineImageLarge from '@/../public/assets/images/projects/ableton-timeline.png';
import TimelineImageSmall from '@/../public/assets/images/projects/ableton-timeline-sm.png';

export const Ableton: Project = {
  id: 6,
  title: 'Ableton Music Controller in Hebrew Language for Live Performances',
  subtitle: 'Ableton Controller | UI/UX Design',
  previewTitle: 'Ableton Controller | UI/UX Design',

  description:
    'A custom-built Ableton music controller designed for an Israeli client, enabling effortless sound assignment, live setup, and Hebrew-language support for smoother music creation and performance.',
  category: 'Mobile Application',
  image: AbletonImage,
  shortDescription:
    'A custom-built Ableton controller designed for effortless sound assignment, Live setup, and Hebrew Language support for smoother creatin porttor your website’s performance by tracking IP addresses, managing content that violates Google policies, and optimizing ad placements for increased revenue—all while leveraging AI to enhance your content strategy.',
  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: Laptop, label: 'Tablet App' },
  ],
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
    'The client needed a way to manage his live Ableton sessions without constant manual setup and confusing navigation. Assigning sounds, organizing instruments, and customizing workflows were time-consuming, especially with the added barrier of software being primarily in English. This created friction in moments when creativity needed to flow freely.',

    'This project was about more than just building a tool, it was about helping a client make his creative process flow as naturally as possible. I designed and developed a custom Ableton music controller that integrates directly into the software, tailored to the client’s personal workflow. From language localization in Hebrew to live performance setups, the solution was created to feel intuitive and personal, empowering the client to focus on music instead of technical hurdles.',
  ],
  outcome: {
    description:
      'The final product gave the client a tool that felt like a natural extension of their music. By removing friction in setup and giving him an interface in his native language, the controller made rehearsals and performances smoother, faster, and more enjoyable. It wasn’t just about software, it was about giving a musician more room to be creative.',
    features: [
      {
        bold: 'Ableton integration',
        text: 'Direct connection for smooth control inside the software.',
      },
      {
        bold: 'Sound Assignment',
        text: 'Easily assign, organize, and customize sounds for different sessions.',
      },
      {
        bold: 'Hebrew language support',
        text: 'Localized experience to match the client’s needs.',
      },
      {
        bold: 'Live performance setup',
        text: 'Quick configuration tools to prepare for stage performances.',
      },
    ],
  },
  mockupImages: {
    sm: { src: AbletonDisplaySmall, height: '500px' },
    lg: { src: AbletonDisplayLarge },
  },
  outcomeImages: {
    lg: [
      { src: AbletonInUseLarge, fullWidth: true, afterFont: true },
      { fullWidth: true, src: AbletonSlantPresentationLarge },
    ],
    sm: [
      { fullWidth: true, src: AbletonInUseSmall, afterFont: true },
      { fullWidth: true, src: AbletonSlantPresentationSmall },
    ],
  },
  designChoiceImages: {
    sm: {
      font: AbletonFontsSmall,
      colors: AbletonColorsSmall,
    },
    lg: {
      font: AbletonFontsLarge,
      colors: AbletonColorsLarge,
    },
  },
  timeLineImage: {
    sm: TimelineImageSmall,
    lg: TimelineImageLarge,
  },
};
