import ResearchIcon from '/assets/images/services/Research Image.svg';
import Conceptualize from '/assets/images/services/Conceptualize Image.svg';
import Testing from '/assets/images/services/UX Testing Image.svg';
import Implement from '/assets/images/services/Implement Image.svg';

export const designProcesses = [
  {
    title: 'Discovery & Research',
    list: [
      'User research',
      'Business requirements',
      'Competitor benchmark',
      'User personas',
      'Stakeholder interview',
    ],
    icon: ResearchIcon,
  },
  {
    title: 'Wireframing & Prototyping',
    list: [
      'User journey mapping',
      'Information Architecture',
      'Interactive prototyping',
      'Create Wireframes',
      'Lo-fi Prototypes',
    ],
    icon: Conceptualize,
  },
  {
    title: 'Design',
    list: [
      'Brand integration',
      'Typography and color',
      'Design system',
      'High-fidelity mockups',
    ],
    icon: Testing,
  },

  {
    title: 'Implement',
    list: [
      'Usability testing',
      'User feedback loops',
      'A/B Testing',
      'Design Improvements',
    ],
    icon: Implement,
  },
];
