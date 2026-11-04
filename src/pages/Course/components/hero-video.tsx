import VideoPoster from '@/../public/assets/images/course/hero-video-thumbnail.png';

type HeroVideoProps = {
  /** Embedded later — pass the final video URL and the player takes over. */
  src?: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  return (
    <div className="relative mt-5 w-full max-w-[680px]">
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-course-ink"
      />
      <div className="relative aspect-[680/410] overflow-hidden rounded-[30px] bg-course-ink ring-1 ring-course-ink ring-inset">
        <video
          src={src}
          poster={VideoPoster}
          controls={Boolean(src)}
          playsInline
          preload="metadata"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
