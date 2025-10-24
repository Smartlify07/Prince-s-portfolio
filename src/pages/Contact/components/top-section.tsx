import BackgroundImage from '@/../public/assets/images/contact/topsectionimage.webp';
import BackgroundImageMobile from '@/../public/assets/images/contact/topsectionimagemobile.webp';

export const TopSection = () => {
  return (
    <section className="relative w-full h-[400px] flex flex-col overflow-hidden">
      {/* Background Image */}
      <picture className="absolute inset-0 z-0">
        <source srcSet={BackgroundImage} media="(min-width:1024px)" />
        <source srcSet={BackgroundImageMobile} media="(max-width:1023px)" />
        <img
          src={BackgroundImage}
          alt="projects-presentation"
          className="w-full h-[370px] object-cover"
        />
      </picture>

      {/* Gradient Overlay + Text */}
      <div className="absolute inset-0 z-10 h-full top-0 left-0 project-gradient border border-red-500 flex flex-col justify-end font-geist py-4 px-5 gap-2">
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
