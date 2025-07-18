import { AboutProjectSection } from './components/about-project';
import { DesignGoalSection } from './components/design-goal';
import { ProjectStats } from './components/project-stats';
import { TopSection } from './components/top-section';

export default function ProjectDetailsPage() {
  return (
    <main className="grid gap-10 font-geist">
      <TopSection />
      <ProjectStats title="Maxwell EV Charging" />
      <AboutProjectSection />
      <DesignGoalSection />
    </main>
  );
}
