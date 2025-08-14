import { DoubleAltArrowRight } from '@solar-icons/react';
import Avatar from '@/../public/assets/images/projects/ezekiel.png';

export const ProjectStats = ({ title }: { title: string }) => {
  return (
    <section className="flex flex-col gap-4 font-geist">
      <div className="flex items-center gap-2 justify-center self-start">
        <h3 className="text-sm/[14px] text-grey-9 text-drop-shadow">Project</h3>
        <DoubleAltArrowRight weight="Outline" className="text-grey-9" />
        <h3 className="text-grey-opaque text-sm font-medium text-drop-shadow">
          {title}
        </h3>
      </div>
      <div className="flex items-center flex-wrap md:flex-nowrap p-2 gap-4 md:gap-2 project-stats">
        <div className="flex items-center gap-1 border-r-grey-4 border-r md:border-none shrink-0 justify-center pr-4">
          <div className="inline-block rounded-md  p-[1px] drop-shadow-[0_0px_5.5px_var(--color-card-shadow)] card-gradient">
            <img
              src={Avatar}
              className="w-[25px] h-8 object-cover rounded-md"
            />
          </div>
          <h1 className="text-grey-opaque text-sm">Ezekiel Olayiwola</h1>
        </div>
        <div className="flex items-center border-r-grey-4 border-r md:border-none shrink-0 justify-center pr-4">
          <p className="text-grey-9 text-sm">Date:</p>
          <p className="text-grey-opaque text-sm">Dec 14, 2024</p>
        </div>
        <div className="flex items-center border-r-grey-4 border-r md:border-none shrink-0 justify-center pr-4">
          <p className="text-grey-9 text-sm">Service:</p>
          <p className="text-grey-opaque text-sm">Website, Landing Page</p>
        </div>
        <div className="flex items-center border-r-grey-4 border-r md:border-none shrink-0 justify-center pr-4">
          <p className="text-grey-9 text-sm">Timeline:</p>
          <p className="text-grey-opaque text-sm">3 weeks</p>
        </div>
        <div className="flex items-center border-r-grey-4 border-r md:border-none shrink-0 justify-center pr-4">
          <p className="text-grey-9 text-sm">Tool: </p>
          <p className="text-grey-opaque text-sm">Figma</p>
        </div>
      </div>
    </section>
  );
};
