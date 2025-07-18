import { DoubleAltArrowRight } from '@solar-icons/react';

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
      <div className="flex items-center flex-wrap p-2 gap-4 project-stats">
        <div className="flex items-center border-r-grey-4 border-r justify-center pr-4">
          <p className="text-grey-opaque text-sm">Ezekiel Olayiwola</p>
        </div>
        <div className="flex items-center border-r-grey-4 gap-2.5 border-r justify-center pr-4">
          <p className="text-grey-9 text-sm">Date:</p>
          <p className="text-grey-opaque text-sm">Dec 14, 2024</p>
        </div>
        <div className="flex items-center border-r-grey-4 gap-2.5 border-r justify-center pr-4">
          <p className="text-grey-9 text-sm">Service:</p>
          <p className="text-grey-opaque text-sm">Website, Landing Page</p>
        </div>
        <div className="flex items-center border-r-grey-4 gap-2.5 border-r justify-center pr-4">
          <p className="text-grey-9 text-sm">Timeline:</p>
          <p className="text-grey-opaque text-sm">3 weeks</p>
        </div>
        <div className="flex items-center border-r-grey-4 gap-2.5 justify-center pr-4">
          <p className="text-grey-9 text-sm">Tool: </p>
          <p className="text-grey-opaque text-sm">Figma</p>
        </div>
      </div>
    </section>
  );
};
