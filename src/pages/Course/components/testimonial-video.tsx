import Poster from '@/../public/assets/images/course/testimonial-video-poster.png';

type TestimonialVideoProps = {
  src: string;
};

export function TestimonialVideo({ src }: TestimonialVideoProps) {
  return (
    <div className="relative mt-10 w-full max-w-[680px]">
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-course-ink"
      />
      <div className="relative aspect-[680/410] overflow-hidden rounded-[30px] bg-course-ink ring-1 ring-course-ink ring-inset">
        <img
          src={Poster}
          alt="Mentee sharing their experience after the UI/UX design training"
          className="absolute top-[-4.02%] left-[-11.85%] h-[104.39%] w-[123.71%] max-w-none"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-[107px] w-[128px] overflow-hidden rounded-bl-[30px]"
        >
          <img
            src={Poster}
            alt=""
            className="absolute top-[-256.64%] left-[-97.79%] h-[358.85%] w-[586.03%] max-w-none"
          />
        </div>
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
}
