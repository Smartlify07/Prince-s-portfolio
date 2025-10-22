import type { Project } from '../types';
import PumpDBImage from '@/../public/assets/images/projects/PumpDB.webp';
import DeviceVector from '@/../public/assets/icons/deviceVector.svg';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';

import PumpDBDisplayLarge from '@/../public/assets/images/projects/pumpdb-hand-mockup.png';
import PumpDBDisplaySmall from '@/../public/assets/images/projects/pumpdb-hand-mockup-sm.png';
import PumpDBColorsLarge from '@/../public/assets/images/projects/pumpdb-colors.png';
import PumpDBColorsSmall from '@/../public/assets/images/projects/pumpdb-colors-sm.png';
import PumpDBSlantPresentationLarge from '@/../public/assets/images/projects/pump-db-double-mockup.png';
import PumpDBSlantPresentationSmall from '@/../public/assets/images/projects/pump-db-double-mockup-sm.png';
import PumpDBFontsLarge from '@/../public/assets/images/projects/pumpdb-font.png';
import PumpDBFontsSmall from '@/../public/assets/images/projects/pumpdb-font-sm.png';
import PumpDBInUseLarge from '@/../public/assets/images/projects/pumpdb-three-mockups.png';
import PumpDBInUseSmall from '@/../public/assets/images/projects/pumpdb-three-mockups-sm.png';
import TimelineImageLarge from '@/../public/assets/images/projects/aora-time.png';
import TimelineImageSmall from '@/../public/assets/images/projects/aora-time-sm.png';

export const PumpDB: Project = {
  id: 8,
  title:
    'Digital workspace for tracking, storing, and managing vessel pump information with ease.',
  subtitle: 'Pump DB | UI/UX Design',
  previewTitle: 'Pump DB | UI/UX Design',
  description:
    'Pump-DB is built as a handy tool where marine engineering crew can quickly capture pump details and monitor pump health while staying on top of maintenance and replacements.',

  category: 'Web Application',

  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: DeviceVector, label: 'Mobile App' },
  ],

  image: PumpDBImage,
  shortDescription:
    'Digital Workspace for Marine Engineering crew. Built for tracking , storing, and managing vessel pump information with ease AORA Fashion AI is a creative companion built to make designing easier and more inspiring. It helps fashion signers turn their ideas; whether sparked by trends',

  outcome: {
    description:
      'Pump DB brings all pump information into one intuitive, easy-to-use workspace. Crews can instantly capture pump details, monitor their health, and stay on top of upcoming replacements. By digitizing the process, the platform eliminates the hassle of manual record-keeping and gives engineers peace of mind knowing their vessel’s pumps are always accounted for.',
    features: [
      {
        bold: 'Quick data capture',
        text: 'Easily record pump details like flow rate, diameter, model, serial number, and more.',
      },
      {
        bold: 'Centralized access',
        text: 'All pump information stored in one place for easy retrieval by any crew member.',
      },
      {
        bold: 'Maintenance tracking',
        text: 'Know the state of each pump and detect when it’s due for replacement.',
      },
      {
        bold: 'Searchable records',
        text: 'Find specific pump details instantly without digging through logs or files.',
      },
    ],
  },

  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '4 Weeks',
    },
    {
      title: 'Industry',
      description: 'Marine',
    },
    { title: 'Platform', description: 'Mobile App' },
  ],

  overview: [
    'Marine crews often juggle scattered records, outdated logs, and manual inspections when it comes to managing pumps. This makes it hard to track maintenance schedules, know when a pump is due for replacement, or quickly find important details during critical operations. These gaps can lead to unnecessary downtime, costly repairs, and added stress for crew members.',
    'Pump DB was designed as a central digital workspace where crews can store, access, and monitor all pump information with ease. By keeping everything in one platform, it reduces errors, saves time, and ensures crews always know the status of their equipment.',
  ],

  mockupImages: {
    sm: { src: PumpDBDisplaySmall, height: '500px' },
    lg: { src: PumpDBDisplayLarge },
  },
  outcomeImages: {
    lg: [
      { src: PumpDBInUseLarge, fullWidth: true, afterFont: true },
      { fullWidth: true, src: PumpDBSlantPresentationLarge },
    ],
    sm: [
      { fullWidth: true, src: PumpDBInUseSmall, afterFont: true },
      { fullWidth: true, src: PumpDBSlantPresentationSmall },
    ],
  },
  designChoiceImages: {
    sm: {
      font: PumpDBFontsSmall,
      colors: PumpDBColorsSmall,
    },
    lg: {
      font: PumpDBFontsLarge,
      colors: PumpDBColorsLarge,
    },
  },
  timeLineImage: {
    sm: TimelineImageSmall,
    lg: TimelineImageLarge,
  },
};
