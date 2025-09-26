import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data/projects';

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-6 px-4 lg:grid lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard imageLoading="lazy" {...project} key={index} />
      ))}
    </section>
  );
};

export default ProjectsSection;
