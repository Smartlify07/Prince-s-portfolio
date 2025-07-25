import { DoubleAltArrowRight } from '@solar-icons/react';

export const LastModified = () => {
  return (
    <section className="grid gap-4">
      <div className="flex items-center gap-2 self-start">
        <h3 className="text-sm/[14px] text-grey-9 text-drop-shadow">Project</h3>
        <DoubleAltArrowRight weight="Outline" className="text-grey-9" />
        <h3 className="text-grey-opaque text-sm font-medium text-drop-shadow">
          Terms of Use
        </h3>
      </div>

      <h1 className="gradient-text font-medium text-[40px]/[52px]">
        Terms of Use
      </h1>
      <p className="text-sm/[150%] text-grey-9 font-inter-tight italic">
        Last modified: July 10, 2025
      </p>
    </section>
  );
};
