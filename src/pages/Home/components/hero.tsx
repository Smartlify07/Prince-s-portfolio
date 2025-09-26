import Card from '@/ui/card';
import { DownloadResumeButton } from '@/components/resume-button';
import { LetsTalkButton } from '@/components/lets-talk-button';

const HeroSection = () => {
  return (
    <section className="flex flex-col bg-[#111119] rounded-4xl p-6 gap-8 md:flex-row">
      <div className="flex flex-col gap-8 md:w-7/12 md:gap-9 md:grow md:shrink-0 md:basis-0">
        <header className="flex flex-col gap-2">
          <h1 className="text-[40px]/[52px] font-geist font-medium tracking-[-0.88px] text-left gradient-text">
            Prince is a Product Designer based in Africa. Previously at Bles
            Software Company. Top-rated on Upwork
          </h1>

          <p className="text-base/[150%] font-geist font-normal text-grey-9">
            My expertise lies in creating visually appealing yet highly usable
            websites, web apps, and mobile apps that align with your brand's
            vision and resonate with your target audience. Let me be your
            partner in transforming ideas into captivating digital solutions
            that prioritize user experience (UX) and drive conversions.
          </p>
        </header>

        <div className="flex items-center shrink-0 gap-4">
          <LetsTalkButton />
          <DownloadResumeButton />
        </div>
      </div>

      <Card className="flex md:w-5/12 items-center shrink-0 px-6 py-10 justify-center ">
        <img
          width={320}
          height={320}
          className="h-[320px] lg:h-full rounded-2xl object-top lg:object-center object-cover"
          src="/assets/images/prince-looking-at-the-camera.webp"
          sizes="(max-width: 768px) 100vw, 420px"
          alt="Prince"
          decoding="async"
          fetchPriority="high"
        />
      </Card>
    </section>
  );
};

export default HeroSection;
