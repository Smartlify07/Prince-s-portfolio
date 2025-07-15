import { BookCall } from './components/book-call';
import { ChatSection } from './components/chat-section';
import { TopSection } from './components/top-section';

function ContactPage() {
  return (
    <main className="grid font-geist gap-10">
      <TopSection />
      <BookCall />
      <ChatSection />
    </main>
  );
}
export default ContactPage;
