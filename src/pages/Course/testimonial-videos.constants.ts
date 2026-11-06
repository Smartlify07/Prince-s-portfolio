import CardA from '@/../public/assets/images/course/testimonial-video-1.png';
import CardB from '@/../public/assets/images/course/testimonial-video-2.png';
import CardC from '@/../public/assets/images/course/testimonial-video-3.png';

export type TestimonialVideoItem = {
  poster: string;
  alt: string;
  /** Figma crops the middle card higher than centre; the rest use a plain cover crop. */
  videoClassName?: string;
};

export const testimonialVideos: TestimonialVideoItem[] = [
  {
    poster: CardA,
    alt: 'Mentee sharing her experience after the UI/UX design training',
  },
  {
    poster: CardB,
    alt: 'Mentee describing the jobs he landed after the training',
    videoClassName: 'object-[50%_19.8%]',
  },
  {
    poster: CardC,
    alt: 'Mentee talking about earning in dollars from Nigeria',
  },
];
