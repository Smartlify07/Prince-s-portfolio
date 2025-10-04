import type { Project } from '../types';
import InvysionImage from '@/../public/assets/images/projects/invysion.webp';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Mobile from '@/../public/assets/icons/deviceVector.svg';
import Responsiveness from '@/../public/assets/icons/responsive_design.svg';
import InvysionMockupLarge from '@/../public/assets/images/projects/dental-note-taking-mockup.webp';
import InvysionMockupSmall from '@/../public/assets/images/projects/dental-note-taking-mockup-sm.webp';
import InvysionUseCaseLarge from '@/../public/assets/images/projects/dental-note-taking-use-case.webp';
import InvysionUseCaseSmall from '@/../public/assets/images/projects/dental-note-taking-use-case-sm.webp';
import InvysionFontsLarge from '@/../public/assets/images/projects/dental-note-taking-font.webp';
import InvysionFontsSmall from '@/../public/assets/images/projects/dental-note-taking-font-sm.webp';
import InvysionColorsSmall from '@/../public/assets/images/projects/dental-note-taking-colors-sm.webp';
import InvysionColorsLarge from '@/../public/assets/images/projects/dental-note-taking-colors.webp';
import InvysionPresentationLarge from '@/../public/assets/images/projects/dental-note-taking-presentation.webp';
import InvysionPresentationSmall from '@/../public/assets/images/projects/dental-note-taking-presentation-sm.webp';
import TimelineImageLarge from '@/../public/assets/images/projects/aora-time.webp';
import TimelineImageSmall from '@/../public/assets/images/projects/aora-time-sm.webp';
export const Invysion: Project = {
  id: 2,
  title: 'Dental Note-Taking App for the Digital Age',
  subtitle: 'Invysion',
  previewTitle: 'Invysion | UI/UX Design ',
  description:
    'Dentists can focus on patient care while AI captures conversations, organizes notes by treatment type, and generates concise summaries ready for electronic health records.',
  category: 'Mobile Application',
  image: InvysionImage,
  shortDescription:
    'Invysion Dental Note Taker is a smart, user-friendly tool built to simplify the way dentists document patient visits. ',
  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '6 Weeks',
    },
    {
      title: 'Industry',
      description: 'Medical AI',
    },
    { title: 'Platform', description: 'Responsive Web App' },
  ],
  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: Mobile, label: 'Mobile First' },
    { icon: Responsiveness, label: 'Responsive Design' },
  ],
  overview: [
    'Dentists often spend more time documenting sessions than interacting with patients. Manual note-taking can be tedious, error-prone, and interrupts the flow of care, making it challenging to maintain accurate, organized patient records.',
    'Invysion Dental Note Taker is a smart, user-friendly tool built to simplify the way dentists document patient visits. During dental sessions, the AI listens to conversations, captures the details, and organizes notes based on treatment types such as exams, fillings, dentures, or extractions. It also identifies speakers—dentist and patient—and provides a concise summary that can easily be transferred to the patient’s electronic health record (EHR). Designed to save time and reduce stress, Invysion lets dentists focus on what really matters: patient care.',
  ],

  outcome: {
    description:
      'With Invysion, dentists can save significant time on note-taking while improving accuracy and organization of patient records. The tool enhances patient care by keeping the dentist fully engaged during appointments, while seamlessly maintaining professional, up-to-date documentation.',
    features: [
      {
        bold: 'Automatic conversation capture',
        text: 'Records dentist-patient interactions in real time.',
      },
      {
        bold: 'Smart categorization',
        text: 'Notes are organized by treatment type like exams, fillings, or extractions.',
      },
      {
        bold: 'Speaker recognition',
        text: 'Differentiates between dentist and patient; allows renaming patients later.',
      },
      {
        bold: 'Summarized highlights',
        text: 'Key medical information is extracted and ready for EHR transfer.',
      },
    ],
  },
  mockupImages: {
    sm: InvysionMockupLarge,
    lg: InvysionMockupSmall,
  },
  outcomeImages: {
    sm: [
      {
        src: InvysionUseCaseSmall,
        fullWidth: true,
      },
      {
        src: InvysionMockupLarge,
        fullWidth: true,
      },
      {
        src: InvysionPresentationSmall,
        fullWidth: true,
      },
    ],
    lg: [
      {
        src: InvysionUseCaseLarge,
        fullWidth: false,
      },
      {
        src: InvysionMockupLarge,
        fullWidth: false,
      },
      {
        src: InvysionPresentationLarge,
        fullWidth: true,
      },
    ],
  },
  designChoiceImages: {
    sm: {
      font: InvysionFontsSmall,
      colors: InvysionColorsSmall,
    },
    lg: {
      font: InvysionFontsLarge,
      colors: InvysionColorsLarge,
    },
  },
  timeLineImage: {
    lg: TimelineImageLarge,
    sm: TimelineImageSmall,
  },
};
