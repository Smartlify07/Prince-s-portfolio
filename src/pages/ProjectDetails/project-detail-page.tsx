import { AboutProjectSection } from './components/about-project';
import { ApproachSection } from './components/approach-section';
import { BrainstormSection } from './components/brainstoming-section';
import { ChallengesSection } from './components/challenges-section';
import { DesignGoalSection } from './components/design-goal';
import { FinalShowCaseSection } from './components/final-showcase';
import { HighlightsSection } from './components/highlights-section';
import { OutcomeSection } from './components/outcome-section';
import { ProjectStats } from './components/project-stats';
import { TopSection } from './components/top-section';
import { UpcomingCaseStudies } from './components/upcoming-casestudies';
import { useParams } from 'react-router';
import type { Project } from '@/lib/types';

import { getProject } from '@/lib/utils';

export default function ProjectDetailsPage() {
  const id = useParams().id;
  const projectWithId = getProject(Number(id));

  return (
    <main className="grid gap-10 font-geist">
      <TopSection
        category={projectWithId?.category}
        description={projectWithId?.shortDescription}
        title={projectWithId?.title ?? ''}
      />
      <div className="grid px-4 lg:px-6 gap-10">
        <ProjectStats title={projectWithId?.subtitle ?? ''} />
        <AboutProjectSection
          title={projectWithId?.subtitle ?? ''}
          description={projectWithId?.description ?? ''}
        />
        <DesignGoalSection
          footer={projectWithId?.goals?.footer ?? ''}
          goalBlocks={projectWithId?.goals?.goalBlocks ?? []}
          designGoal={projectWithId?.goals.description ?? ''}
        />
        <ChallengesSection
          challengeBlocks={projectWithId?.challenge.blocks ?? []}
          challengeDescription={projectWithId?.challenge.description ?? ''}
        />
        <ApproachSection
          content={projectWithId?.approach.content ?? ''}
          title={projectWithId?.approach.title ?? ''}
          subtitle={projectWithId?.approach.subtitle ?? ''}
        />
        <BrainstormSection
          content={projectWithId?.brainstorm.content ?? []}
          description={projectWithId?.brainstorm.description ?? ''}
        />

        <HighlightsSection
          highlights={
            projectWithId?.highlights ?? ({} as Project['highlights'])
          }
          testing={projectWithId?.testing ?? ({} as Project['testing'])}
        />
        <OutcomeSection
          outcome={projectWithId?.outcome ?? ({} as Project['outcome'])}
        />
        <FinalShowCaseSection
          finalShowcase={
            projectWithId?.finalShowcase ?? ({} as Project['finalShowcase'])
          }
        />
        <UpcomingCaseStudies />
      </div>
    </main>
  );
}
