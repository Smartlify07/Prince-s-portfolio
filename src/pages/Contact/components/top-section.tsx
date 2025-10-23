import BackgroundImage from '@/../public/assets/images/contact/topsectionimage.webp';
import BackgroundImageMobile from '@/../public/assets/images/contact/topsectionimagemobile.webp';

export const TopSection = () => {
  return (
    <section className="w-full flex flex-col relative h-[400px]">
      {/* Background Image */}
      <picture>
        <source srcSet={BackgroundImage} media="(min-width:1024px)" />
        <source srcSet={BackgroundImageMobile} media="(max-width:1023px)" />
        <img
          src={BackgroundImage}
          className="w-full h-full  md:block object-cover"
          alt="projects-presentation"
        />
      </picture>

      {/* Gradient Overlay + Text */}
      <div className="project-gradient absolute z-10 inset-0 overflow-clip flex flex-col justify-end font-geist py-4 px-5 gap-2">
        <div className="flex items-center">
          <div className="flex flex-col gap-2 sm:max-w-[50%]">
            <h2 className="text-[40px]/[50px] font-medium gradient-text tracking-[-2px] text-start">
              Contact
            </h2>
            <p className="text-sm/[20px] text-[#909090]">
              I’m eager to hear from you! If you’re interested in collaborating,
              sharing an idea, or just want to connect, don’t hesitate to get in
              touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
