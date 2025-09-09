import HealthCareIcon from '/assets/images/services/Healthcare Image.svg';
import FintechIcon from '/assets/images/services/Fintech Image.svg';
import FitnessIcon from '/assets/images/services/Health & Fitness Image.svg';
import EdTech from '/assets/images/services/EdTech Image.svg';
import FashionDesign from '/assets/images/services/Fashion & Design Image.svg';
import Food from '/assets/images/services/Food & Restaurant Image.svg';
import Lawyers from '/assets/images/services/Lawyers & Attorneys Image.svg';
import Commerce from '/assets/images/services/Retail & Ecommerce Image.svg';
import NonProfit from '/assets/images/services/Non-Profit Organizations Image.svg';

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
      'My UI/UX design services can be customized to provide specialized and engaging web designs that meet your specific needs. These indispensable tools are suitable for both patients and physicians.',
  },
  {
    icon: FintechIcon,
    title: 'Fintech',
    description:
      'My user-centered design (UCD) approach helps many banking and finance firms to shine in the competitive landscape by creating digital products that make use of the latest technology. Stay ahead in financial services with our innovative UI/UX web design services.',
  },
  {
    icon: FitnessIcon,
    title: 'Health & Fitness',
    description:
      'Navigate the digital health revolution by providing you with a comprehensive and user-friendly website design that will make it easy for your customers to access your services. With my expertise in web design, I can create a responsive and engaging platform that will showcase your health and fitness brand in the best possible light. brand to the next level.',
  },
  {
    icon: EdTech,
    title: 'EdTech',
    description:
      'I design engaging e-learning interfaces to enhance interactive learning experiences, deliver personalized content, and foster student-teacher collaboration, transforming education.',
  },
  {
    icon: FashionDesign,
    title: 'Fashion & Design',
    description:
      'I design digital solutions in terms of UI/UX design services to help captivate audiences, showcase products beautifully, and enable effortless online shopping experiences.',
  },
  {
    icon: Food,
    title: 'Food & Restaurant',
    description:
      'Deliver unparalleled convenience to your food business with premium UI design solutions. Enhance your food-based startup’s reputation by providing seamless digital experiences through my expert mobile and web app designs.',
  },

  {
    icon: Lawyers,
    title: 'Lawyers & Attorneys',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: Commerce,
    title: 'Retail & Ecommerce',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: NonProfit,
    title: 'Non-Profit Organizations',
    description: `Forge the future of your non-profit organization with my innovative mobile app UI/UX design services. Connect and mobilize your NGO's target audience, promoting a lasting impact and global reach.`,
  },
];
