import { CloudDownload } from '@solar-icons/react';
import Button from '@/ui/button';
import Prince from '@/../public/assets/images/about/hero.png';
import { LetsTalkButton } from '@/components/lets-talk-button';

export const AboutContainer = () => {
  return (
    <section className="bg-[#111119] flex flex-col gap-8 rounded-4xl px-4 py-6 md:flex-row">
      <div className="flex flex-col md:w-8/12 gap-9">
        <StorySection />
        <div className="flex items-center shrink-0 gap-4">
          <LetsTalkButton />
          <Button
            variant="outline"
            className="inline-flex font-medium text-grey-opaque shrink-0 items-center gap-2"
          >
            <CloudDownload size={16} />
            Download Resume
          </Button>
        </div>
      </div>

      <div className="inline-block rounded-2xl md:w-5/12 p-[2px] drop-shadow-[0_0px_5.5px_var(--color-card-shadow)] ">
        <img
          src={Prince}
          alt="Prince"
          className="w-full h-[663px] md:h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="gradient-text font-medium font-geist -tracking-smaller text-[40px]">
        I'm an explorer who loves learning how things work and turning ideas
        into intuitive, impactful digital experiences.
      </h1>
      <p className="text-grey-9 text-sm/[150%] font-normal font-geist">
        My tech journey began in 2014, not in a classroom, but on my mobile
        phone, where I created my very first logo using the PixGrid App. That
        initial spark of curiosity ignited a passion for designing various logos
        and graphics for small businesses. Eventually, I transitioned into the
        world of UI/UX design, where I've dedicated over three years to crafting
        intuitive, user-centered digital experiences for startups, scale-ups,
        and brands across diverse industries.
        <br />
        <br />
        As a UI/UX Designer, and Brand Designer, I combine strategic thinking
        with creative execution, helping companies not only look great but solve
        real problems through design.
        <br />
        <br />
        When I’m not designing, you’ll likely find me reading business books,
        watching movies, exploring new tech, or sharing knowledge with my
        community people across{' '}
        <span className="text-[#EDEDEB] font-medium">YouTube</span>,{' '}
        <span className="text-[#EDEDEB] font-medium">LinkedIn</span>, and{' '}
        <span className="text-[#EDEDEB] font-medium">Whatsapp</span>.
      </p>
    </div>
  );
};
