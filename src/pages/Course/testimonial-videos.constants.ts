import DasolaPoster from '@/../public/assets/images/course/testimonial-dasola.webp';
import HarounPoster from '@/../public/assets/images/course/testimonial-haroun.webp';
import SylverPoster from '@/../public/assets/images/course/testimonial-sylver.webp';

export type TestimonialVideoItem = {
  src: string;
  poster: string;
  alt: string;
  /**
   * Each clip is framed differently: the value matches the poster's crop so
   * the first frame lines up with the still.
   */
  videoClassName?: string;
};

export const testimonialVideos: TestimonialVideoItem[] = [
  {
    src: '/assets/videos/course-testimonial-dasola.mp4',
    poster: DasolaPoster,
    alt: 'Dasola, a UI/UX design mentee, sharing her experience',
    videoClassName: 'object-[50%_20%]',
  },
  {
    src: '/assets/videos/course-testimonial-sylver.mp4',
    poster: SylverPoster,
    alt: 'Sylver, a UI/UX design mentee, describing the jobs he landed',
    videoClassName: 'object-[50%_35%]',
  },
  {
    src: '/assets/videos/course-testimonial-haroun.mp4',
    poster: HarounPoster,
    alt: 'Haroun, a UI/UX design mentee, talking about earning in dollars',
    videoClassName: 'object-[50%_50%]',
  },
];
