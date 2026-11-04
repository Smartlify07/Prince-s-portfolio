type TestimonialWallCardProps = {
  image: string;
  alt: string;
};

export function TestimonialWallCard({ image, alt }: TestimonialWallCardProps) {
  return (
    <div className="relative aspect-[490/350] w-full">
      <div
        aria-hidden
        className="absolute inset-0 translate-y-1.5 rounded-[30px] bg-course-ink"
      />
      <div className="relative size-full overflow-hidden rounded-[30px] bg-white ring-1 ring-course-ink ring-inset">
        <img
          src={image}
          alt={alt}
          className="absolute top-0 left-0 w-full max-w-none"
        />
      </div>
    </div>
  );
}
