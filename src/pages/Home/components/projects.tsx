import { ArrowRightUp } from '@solar-icons/react';
import { projects } from '../../../lib/constants';
import Badge from '../../../ui/badge';

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-6 px-4">
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  category,
  image,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
}) => {
  return (
    <div className="relative">
      <div className="rounded-3xl h-[301px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="project-gradient absolute left-0 overflow-clip bottom-0 flex flex-col font-geist py-4 px-5 gap-2">
        <Badge className="text-white text-[10px] z-10 bg-[#0F0F1A]/80 tracking-[0%] self-start">
          {category}
        </Badge>
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl/[30.8px] text-[#EDEDEB] tracking-[-0.88px] text-start">
              {title}
            </h2>
            <p className="text-sm text-[#909090] font-normal h-10 line-clamp-2 ">
              {description}...
            </p>
          </div>
          <ArrowRightUp className="text-[#909090]  shrink-0" size={16} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
