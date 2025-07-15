import { ConnectSection } from "./let's-connect";
import { MessageSection } from './message-section';

export const ChatSection = () => {
  return (
    <section className="py-6 px-4 font-geist grid gap-14">
      <header className="grid gap-2">
        <h1 className="gradient-text text-center text-[40px] font-medium -tracking-smaller">
          Let's chat
        </h1>
        <p className="text-sm/[150%] text-center text-grey-9 ">
          Let's collaborate to bring your vision to life! I’m eager to learn
          more about your project and share ideas.
        </p>
      </header>

      <div className="grid gap-6">
        <ConnectSection />
        <MessageSection />
      </div>
    </section>
  );
};
