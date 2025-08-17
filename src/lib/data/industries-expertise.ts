import HealthCareIcon from '/assets/images/services/Healthcare Image.svg';
import FintechIcon from '/assets/images/services/Fintech Image.svg';
import EdTech from '/assets/images/services/EdTech Image.svg';
import Ecommerce from '/assets/images/services/Retail & Ecommerce Image.svg';
import Corporate from '/assets/images/services/corporate.svg';

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
      'I offer tailored UI/UX design services that create unique and captivating web designs, perfectly aligned with your individual requirements. These essential tools cater to the needs of both patients and healthcare professionals.',
  },
  {
    icon: FintechIcon,
    title: 'Fintech',
    description:
      'My user-centered design (UCD) approach helps many banking and finance firms to shine in the competitive landscape by creating digital products that make use of the latest technology.',
  },
  {
    icon: Corporate,
    title: 'Corporate',
    description:
      'Got a business stuff to manage? I’ve designed and built a couple of corporate apps and websites for hospitals, hotels, fashion, manufacturing, and other industries.',
  },

  {
    icon: Ecommerce,
    title: 'E-commerce',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },
  {
    icon: EdTech,
    title: 'Edu-Tech',
    description:
      'I design engaging e-learning interfaces to enhance interactive learning experiences, deliver personalized content, and foster student-teacher collaboration, transforming education.',
  },
  {
    icon: Ecommerce,
    title: 'SAAS Application',
    description:
      'My UI/UX design services for SaaS applications ensure a smooth user experience. I focus on users’ needs to enhance data security, cross-platform compatibility, and high performance.',
  },
];
