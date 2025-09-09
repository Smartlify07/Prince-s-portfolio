import Prince from '@/../public/assets/images/about/hero.png';
import { LetsTalkButton } from '@/components/lets-talk-button';
import { DownloadResumeButton } from '@/components/resume-button';

export const AboutContainer = () => {
  return (
    <section className="bg-[#111119] flex flex-col gap-8 rounded-4xl px-4 py-6 md:flex-row">
      <div className="flex flex-col md:w-7/12 gap-9">
        <StorySection />
        <div className="flex items-center shrink-0 gap-4">
          <LetsTalkButton />
          <DownloadResumeButton />
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
        I’m a Top-rated UI/UX Designer that crafts scalable designs with a blend
        of user delight.
      </h1>
      <p className="text-grey-9 text-sm/[150%] font-normal font-geist">
        My tech journey began in 2014, not in a classroom, but on my mobile
        phone, where I created my very first logo using the PixGrid App. That
        initial spark of curiosity ignited a passion for designing various logos
        and graphics for small businesses. Eventually, I transitioned into the
        world of UI/UX design, where I've dedicated over three years to crafting
        intuitive, user-centered digital experiences for startups, scale-ups,
        and brands across diverse industries.
      </p>
    </div>
  );
};
