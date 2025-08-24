import Badge from '@/ui/badge';
import AboutIcon from '/public/assets/icons/shopping.svg';

export const AboutProjectSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="flex flex-col font-geist gap-8">
      <Badge className="text-xl/[20px] flex items-center p-2.5 self-start text-grey-opaque font-medium gap-2 opacity-50">
        <img src={AboutIcon} alt="about-icon" /> About the Project
      </Badge>

      <div className="grid gap-4">
        <h1 className="gradient-text -tracking-smaller font-medium text-[40px]/[52px]">
          {title}
        </h1>
        <p className="text-sm/[150%] text-grey-9">{description}</p>
      </div>
    </section>
  );
};
