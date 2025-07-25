import BackgroundImage from '/public/assets/images/termsofuse/top-image.png';
import BackgroundImageLarge from '/public/assets/images/termsofuse/top-section-image-large.png';

export const TopSection = () => {
  return (
    <section className="w-full flex flex-col relative h-[400px]">
      <img
        src={BackgroundImage}
        className="w-full h-full md:hidden object-cover"
        alt="project-combo"
      />
      <img
        src={BackgroundImageLarge}
        className="w-full hidden md:block h-full object-cover"
        alt="project-combo"
      />

      <div className="project-gradient absolute left-0 z-10 inset-0 overflow-clip flex flex-col justify-end font-geist py-6 px-4 gap-2">
        <div className="flex flex-col gap-2  ">
          <div className="flex justify-between items-end">
            <h2 className="text-[40px]/[50px] font-medium gradient-text tracking-[-2px] text-start">
              Terms of Services
            </h2>
          </div>
          <p className="text-sm/[20px] text-[#909090]">
            Here are the General Terms and Conditions of Business (hereafter
            referred to as "GTC") for Ezekiel Olayiwola, who specializes as a
            UI/UX Designer, Brand Designer, and Non-Code Developer-as-a-Service.
          </p>
        </div>
      </div>
    </section>
  );
};
