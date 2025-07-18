import { DescriptionSection } from './components/description-section';
import { KeySections } from './components/key-sections';
import { LastModified } from './components/last-modified';
import { TopSection } from './components/top-section';

export default function PrivacyPolicy() {
  return (
    <main className="grid font-geist gap-10">
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
