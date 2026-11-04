type CourseModuleCardProps = {
  index: number;
  title: string;
  description: string;
};

export function CourseModuleCard({
  index,
  title,
  description,
}: CourseModuleCardProps) {
  return (
    <article className="flex w-full flex-col gap-2 rounded-[20px] border border-course-muted bg-course-card px-[30px] py-5 sm:flex-row sm:items-start sm:gap-5">
      <p className="course-display shrink-0 font-bricolage text-[18px] leading-[22px] font-bold whitespace-nowrap text-course-mint">
        MODULE {index}
      </p>
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <h3 className="course-display font-bricolage text-[18px] leading-[22px] font-bold text-white">
          {title}
        </h3>
        <p className="font-inter text-[16px] leading-6 font-normal text-course-dim">
          {description}
        </p>
      </div>
    </article>
  );
}
