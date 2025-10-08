import { ProjectStats } from './components/project-stats';
import { TopSection } from './components/top-section';
import { useParams } from 'react-router';
import DesignHighlightImage from '@/../public/assets/images/projects/design-highlight-2.webp';
import { getProject } from '@/lib/utils';
import OverviewSection from './components/overview-section';
import { OutcomeSection } from './components/outcome-section';
import { UpcomingCaseStudies } from './components/upcoming-casestudies';
import { useMemo } from 'react';

export default function ProjectDetailsPage() {
  const id = useParams().id;
  const projectWithId = useMemo(() => getProject(Number(id)), [id]);

  return (
    <main className="grid px-4 gap-15 font-geist">
      <TopSection
        description={projectWithId?.description}
        title={projectWithId?.title ?? ''}
        categories={projectWithId?.categories ?? []}
      />

      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={projectWithId?.mockupImages?.lg.src ?? DesignHighlightImage}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={projectWithId?.mockupImages?.sm.src ?? DesignHighlightImage}
        />
        <img
          fetchPriority="high"
          src={projectWithId?.mockupImages?.lg.src ?? DesignHighlightImage}
          alt="design-highlight-image"
          className={`w-full h-[${
            projectWithId?.mockupImages?.sm.height ?? '500px'
          }] lg:h-[600px] object-cover rounded-2xl`}
        />
      </picture>

      <ProjectStats stats={projectWithId?.stats ?? []} />
      <OverviewSection overview={projectWithId?.overview ?? []} />
      <OutcomeSection project={projectWithId!} />
      <UpcomingCaseStudies />
    </main>
  );
}
