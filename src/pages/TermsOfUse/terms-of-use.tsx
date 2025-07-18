import { DescriptionSection } from './components/description-section';
import { KeySections } from './components/key-sections';
import { LastModified } from './components/last-modified';
import { TopSection } from './components/top-section';

export default function TermsOfUse() {
  return (
    <main className="grid gap-10 font-geist">
      <TopSection />
      <div className="grid gap-10 px-4">
        <LastModified />
        <div className="grid gap-14">
          <DescriptionSection />
          <KeySections />
        </div>
      </div>
    </main>
  );
}
