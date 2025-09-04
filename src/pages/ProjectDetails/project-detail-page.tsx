import { ProjectStats } from './components/project-stats';
import { TopSection } from './components/top-section';
import { useParams } from 'react-router';
import DesignHighlightImage from '@/../public/assets/images/projects/design-highlight-2.png';
import { getProject } from '@/lib/utils';
import OverviewSection from './components/overview-section';
import { OutcomeSection } from './components/outcome-section';
import { UpcomingCaseStudies } from './components/upcoming-casestudies';

export default function ProjectDetailsPage() {
  const id = useParams().id;
  const projectWithId = getProject(Number(id));

  return (
    <main className="grid px-4 gap-15 font-geist">
      <TopSection
        description={projectWithId?.shortDescription}
        title={projectWithId?.title ?? ''}
      />

      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />

      <ProjectStats />
      <OverviewSection />
      <OutcomeSection />
      <UpcomingCaseStudies />
    </main>
  );
}
