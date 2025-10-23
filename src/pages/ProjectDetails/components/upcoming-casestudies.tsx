import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data/projects';
import Button from '@/ui/button';
import { Case } from '@solar-icons/react';
import { useParams } from 'react-router';

export const UpcomingCaseStudies = () => {
  const params = useParams();

  return (
    <section className="flex flex-col gap-6 font-geist border-b-grey-4/60">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
          Other Case Studies
        </h1>
        <Button
          as="a"
          href="/"
          variant="default"
          className="self-start lg:self-center"
        >
          <Case size={16} weight="Outline" />
          Back to Projects
        </Button>
      </div>

      <div className="flex items-start gap-6 overflow-scroll scrollbar-hide">
        {projects
          .filter((project) => project.id !== Number(params.id))
          .map((project, index) => (
            <ProjectCard
              className="w-11/12 lg:w-6/12 shrink-0"
              {...project}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};
