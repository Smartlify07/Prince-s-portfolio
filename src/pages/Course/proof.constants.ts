import Earnings10k from '@/../public/assets/images/course/proof-earnings-10k.png';
import Earnings4k from '@/../public/assets/images/course/proof-earnings-4k.png';
import Earnings8k from '@/../public/assets/images/course/proof-earnings-8k.png';
import JobSuccess from '@/../public/assets/images/course/proof-job-success.png';

export type ProofCardData = {
  image: string;
  alt: string;
  /** Figma crops every screenshot differently; percentages scale with the card. */
  imageClassName: string;
};

export const proofCards: ProofCardData[] = [
  {
    image: Earnings4k,
    alt: 'Upwork profile showing $4K+ total earnings across 4 jobs',
    imageClassName: 'top-[-16%] left-0 w-full',
  },
  {
    image: Earnings8k,
    alt: 'Upwork profile showing $8K+ total earnings across 6 jobs',
    imageClassName: 'top-[-17.16%] left-0 w-full',
  },
  {
    image: Earnings10k,
    alt: 'Upwork profile showing $10K+ total earnings across 16 jobs',
    imageClassName: 'inset-0 size-full object-cover',
  },
  {
    image: JobSuccess,
    alt: 'Five-star Upwork job review for a $7,745 professional UI/UX design contract',
    imageClassName: 'top-[-19.42%] left-0 w-full',
  },
];
