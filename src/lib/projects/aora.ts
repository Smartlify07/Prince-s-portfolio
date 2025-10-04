import type { Project } from '../types';
import AoraImage from '@/../public/assets/images/projects/aora-fashion.webp';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Laptop from '@/../public/assets/icons/laptop.svg';
import AoraMockupLarge from '@/../public/assets/images/projects/aora-fashion-mockup.webp';
import AoraWireframeLarge from '@/../public/assets/images/projects/aora-wireframe.webp';
import AoraWireframeSmall from '@/../public/assets/images/projects/aora-wireframe-sm.webp';
import AoraFontsLarge from '@/../public/assets/images/projects/aora-fonts.webp';
import AoraFontsSmall from '@/../public/assets/images/projects/aora-fonts-sm.webp';
import AoraColorsSmall from '@/../public/assets/images/projects/aora-colors-sm.webp';
import AoraColorsLarge from '@/../public/assets/images/projects/aora-colors.webp';
import AoraMockup2Large from '@/../public/assets/images/projects/aora-mockup-2.webp';
import AoraMockup2Small from '@/../public/assets/images/projects/aora-mockup-2-sm.webp';
import TimelineImageLarge from '@/../public/assets/images/projects/aora-time.webp';
import TimelineImageSmall from '@/../public/assets/images/projects/aora-time-sm.webp';

export const Aora: Project = {
  id: 1,
  previewTitle: 'Aora | UI/UX Design',
  title: 'AI Assistant that helps designers bring fresh fashion ideas to life.',
  subtitle: 'Aora',
  description:
    'Fashion designers can spark inspiration with trends, photos, or simple text prompts, then refine their creations by choosing fabrics, silhouettes, and models to see their designs in realistic multi-view visuals.',
  category: 'Web Application',
  categories: [
    { icon: DesignVector, label: 'UX Design' },
    { icon: Layers, label: 'UI Design' },
    { icon: Figma, label: 'Figma' },
    { icon: Laptop, label: 'Web App' },
  ],
  image: AoraImage,
  shortDescription:
    'AORA Fashion AI is a creative companion built to make designing easier and more inspiring. It helps fashion designers turn their ideas; whether sparked by trends',

  outcome: {
    description:
      'AORA Fashion AI streamlines this journey. Designers can start with industry trends, upload inspiration photos, or simply type a prompt. The AI then generates realistic, multi-angle visuals while allowing designers to tweak fabrics, colors, silhouettes, and models. It gives them a fast, flexible way to explore ideas without losing the creative spark.',
    features: [
      {
        bold: 'Trend Inspiration',
        text: 'Fashion Designers can explore current industry styles for ideas.',
      },
      {
        bold: 'Flexible Inputs',
        text: 'Fashion Designers can either start the process with a photo upload or a text prompt.',
      },
      {
        bold: 'Customizable Design Elements',
        text: ' Designers have options to pick fabrics, colors, textures, silhouettes, and models for their style generation process.',
      },
      {
        bold: 'Multi-angle Visuals',
        text: ' The final product displays your design from front, back, and side',
      },
    ],
  },
  overview: [
    'Fashion designers often spend hours sketching ideas, sourcing materials, and visualizing outfits on models. This process can be slow, expensive, and sometimes stifling to creativity. Many designers struggle to quickly explore multiple ideas before committing to a concept.',
    'AORA Fashion AI is a creative companion built to make designing easier and more inspiring. It helps fashion designers turn their ideas; whether sparked by trends, photos, or just a text prompt, into realistic visuals they can work with instantly. By letting users pick fabrics, colors, silhouettes, and models, the platform brings concepts to life in front, back, and side views. AORA is designed to feel like a partner in the creative process, helping designers experiment, iterate, and realize their visions faster.',
  ],
  stats: [
    { title: 'My Role', description: 'UI/UX Designer ' },
    {
      title: 'Duration',
      description: '5 Weeks',
    },
    {
      title: 'Industry',
      description: 'Fashion AI',
    },
    { title: 'Platform', description: 'Web App' },
  ],
  mockupImages: {
    sm: AoraMockupLarge,
    lg: AoraMockupLarge,
  },
  outcomeImages: {
    lg: [
      { src: AoraWireframeLarge, fullWidth: true },
      { fullWidth: true, src: AoraMockup2Large },
    ],
    sm: [
      { fullWidth: true, src: AoraWireframeSmall },
      { fullWidth: true, src: AoraMockup2Small },
    ],
  },
  designChoiceImages: {
    sm: {
      font: AoraFontsSmall,
      colors: AoraColorsSmall,
    },
    lg: {
      font: AoraFontsLarge,
      colors: AoraColorsLarge,
    },
  },
  timeLineImage: {
    sm: TimelineImageSmall,
    lg: TimelineImageLarge,
  },
};
