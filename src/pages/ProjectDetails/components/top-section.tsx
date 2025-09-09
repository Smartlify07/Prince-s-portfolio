import Badge from '@/ui/badge';
import type { Project } from '@/lib/types';

export const TopSection = ({
  title,
  description,
  categories,
}: Partial<Project>) => {
  return (
    <section className="w-full flex flex-col relative">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-end">
          <h1 className="text-[40px]/[50px] lg:w-10/12 font-medium gradient-text tracking-[-2px] text-start">
            {title}{' '}
          </h1>
        </div>
        <p className="text-sm/[20px] text-[#909090] lg:w-9/12">{description}</p>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2">
          {categories?.map((category, index) => (
            <Badge
              key={index}
              shadowSize="small"
              className="text-grey-opaque text-sm/[20px] font-geist font-medium flex items-center gap-2"
            >
              <img src={category.icon} alt={category.label + '-icon'} />
              {category.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
