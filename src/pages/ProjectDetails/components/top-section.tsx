import Badge from '@/ui/badge';
import BackgroundImage from '/public/assets/images/projects/top-section.png';
import BackgroundImageMobile from '/public/assets/images/projects/top-section-mobile.png';

export const TopSection = () => {
  return (
    <section className="w-full flex flex-col relative h-[400px]">
      <img
        src={BackgroundImage}
        className="w-full h-[350px] hidden md:block object-cover"
        alt="project-combo"
      />
      <img
        src={BackgroundImageMobile}
        className="w-full h-full md:hidden object-cover"
        alt="project-combo"
      />

      <div className="project-gradient absolute left-0 z-10 inset-0 overflow-clip flex flex-col justify-end font-geist py-4 px-4 gap-2">
        <div className="flex items-center self-end">
          <div className="flex flex-col gap-2  ">
            <div className="flex justify-between items-end">
              <h2 className="text-[40px]/[50px] font-medium gradient-text tracking-[-2px] text-start">
                Maxwell EV Charging - Landing Page
              </h2>
              <Badge className="text-grey-opaque text-[10px]/[20px] shrink-0">
                Web application
              </Badge>
            </div>
            <p className="text-sm/[20px] text-[#909090]">
              The Maxwell landing page presents a clean, modern user interface
              for promoting the company’s EV charging solutions. It targets
              individuals and businesses seeking reliable and efficient EV
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
