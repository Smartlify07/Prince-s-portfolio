import { BookCall } from './components/book-call';
import { ChatSection } from './components/chat-section';
import { KnowMoreSection } from './components/know-more-section';
import { TopSection } from './components/top-section';
import { FaqSection } from '@/components/faq';

function ContactPage() {
  return (
    <main className="grid font-geist gap-10">
      <TopSection />
      <BookCall />
      <ChatSection />
      <KnowMoreSection />
      <FaqSection />
    </main>
  );
}
export default ContactPage;
