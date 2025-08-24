import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data/projects';

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-6 px-4 md:grid md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </section>
  );
};

export default ProjectsSection;
