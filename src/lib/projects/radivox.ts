import type { Project } from '../types';
import RadivoxImage from '@/../public/assets/images/projects/expense-master.png';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Laptop from '@/../public/assets/icons/laptop.svg';

export const Radivox: Project = {
  id: 7,
  title: 'Making CTs, MRIs, and X-Rays Simple for Everyone',
  subtitle: 'Radivox MedAI',
  previewTitle: 'Radivox MedAI | UI/UX Design',

  description:
    'Radivox helps patients and healthcare providers turn complex medical scans into clear, easy-to-understand summaries, giving patients confidence and doctors more time to focus on care.',
  category: 'Web Application',
  image: RadivoxImage,
  shortDescription:
    'Radivox helps patients and healthcare providers turn complex medical scans into easy-to-understand summaries, giving patients confidence and doctors more time to focus on careExpenseMaster is a financial planning tool that helps users keep track of their spending and savings effortlessly.',
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
      description: '5 Weeks',
    },
    {
      title: 'Industry',
      description: 'Health / AI',
    },
    { title: 'Platform', description: 'Responsive Web App' },
  ],
  overview: [
    'Patients often receive CT, MRI, and X-ray results that are hard to interpret, leaving them anxious and unsure. Healthcare providers, meanwhile, spend valuable time explaining findings in plain language, which can slow down care and add stress to their workflow.',

    'Medical scans are essential for diagnosis, but for many patients, they’re overwhelming and full of confusing terminology. Radivox was built to change that. By allowing patients to upload scans or retrieve them from their PACS provider, the platform uses AI to generate plain-English summaries that anyone can understand. This empowers patients to take part in their own healthcare journey while helping providers communicate more effectively and save time.',
  ],
  outcome: {
    description:
      'Radivox simplifies the process by analyzing medical scans with AI and producing clear, patient-friendly summaries. Patients gain understanding and peace of mind, while providers can deliver better care efficiently, without repeatedly translating technical jargon.',
    features: [
      {
        bold: 'PACS integration',
        text: 'Securely retrieves scans directly from the patient’s provider.',
      },
      {
        bold: 'Image upload',
        text: 'Patients can upload DICOM-format CT, MRI, or X-ray scans.',
      },
      {
        bold: 'AI-powered analysis',
        text: 'Automatically interprets scans for faster understanding.',
      },
      {
        bold: 'Patient-friendly summaries',
        text: 'Explains results in simple, easy-to-read language.',
      },
    ],
  },
};
