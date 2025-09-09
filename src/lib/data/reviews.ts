import Yancin from '@/../public/assets/images/testimonials/yancin.png';
import Adin from '@/../public/assets/images/testimonials/adin.png';
import Victory from '@/../public/assets/images/testimonials/Victory.png';
import Muhammad from '@/../public/assets/images/testimonials/Muhammed.png';
import Naeela from '@/../public/assets/images/testimonials/Naeela.png';
import Stas from '@/../public/assets/images/testimonials/Stas.png';

type Review = {
  title: string;
  description: string;
  author: {
    image: string;
    name: string;
    position: string;
  };
};

export const reviews: Review[] = [
  {
    title: 'His Design skills are top tier.',
    description:
      'It is a pleasure to work with Prince. He has a keen eye for designing and truly understands what clients are looking for. His skills are top tier and I highly recommend him to anyone looking for website design.',
    author: {
      image: Yancin,
      name: 'Yancy Rincon',
      position: 'Founder - QuantCore AI',
    },
  },
  {
    title: 'Prince made my App look premium',
    description:
      'He delivered clean, modern, and highly professional designs that brought my vision to life. Communication was smooth, deadlines were met, and the end result made my app look like a premium product ready for market. I highly recommend working with him if you want quality design work done right.',
    author: {
      image: Adin,
      name: 'Adin Sagar',
      position: 'Founder - Fahampesa',
    },
  },

  {
    title: 'He’s an Excellent Designer',
    description:
      "Prince Ugboga is an outstanding professional for any product design role. With remarkable learning ability, unwavering work ethic, and creative problem-solving skills, he's an invaluable asset to any team.",
    author: {
      image: Stas,
      name: 'Stas Sorokin',
      position: 'Founder - Bles Software',
    },
  },

  {
    title: 'Prince brought my website to life',
    description:
      'Prince understands all the technical aspects behind creating a website. He was able to work under minimal supervision and worked with my timelines. Will be hiring him again.',
    author: {
      image: Naeela,
      name: 'Naeela Saha',
      position: 'Brand Owner - Amazon',
    },
  },
  {
    title: 'Prince drives product success through design',
    description:
      'Prince drives product success through design. During his 13 months with us as an in-house UI/UX Designer, he consistently delivered work that was not only visually outstanding but also strategically aligned with our clients’ product goals.',
    author: {
      image: Muhammad,
      name: 'Muhammad Sufian',
      position: 'CEO - Bles Software',
    },
  },
  {
    title: 'Prince keen eye for details truly sets his work apart',
    description:
      'Prince has consistently demonstrated a deep understanding of design principles and a keen eye for detail that truly sets his work apart. His ability to create visually compelling and user-friendly designs is super remarkable.',
    author: {
      image: Victory,
      name: 'Victory Omoyibo',
      position: 'Software Engr. - Decagon',
    },
  },
];
