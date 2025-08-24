import React from 'react';
import ApproachImage from '@/../public/assets/images/projects/approach.png';
import type { Project } from '@/lib/types';

export const ApproachSection = ({
  title,
  content,
  subtitle,
}: {
  title: Project['approach']['title'];
  subtitle: Project['approach']['subtitle'];
  content: Project['approach']['content'];
}) => {
  return (
    <section className="grid gap-8 pb-10 border-b border-b-grey-4/60">
      <header>
        <h1 className="gradient-text text-center font-medium text-[40px]/[52px] -tracking-smaller">
          My Approach
        </h1>
      </header>

      <div className="flex flex-col items-stretch gap-6 md:flex-row">
        <div className="w-full rounded-2xl">
          <img
            src={ApproachImage}
            className="rounded-2xl h-full object-cover"
          />
        </div>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <h3 className="gradient-text font-medium text-xl">{title}</h3>
            <p className="text-grey-opaque font-bold text-sm/[150%]">
              {subtitle}
            </p>
          </div>
          <p className="text-grey-9 text-sm/[150%]">
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.length - 1 && (
                  <>
                    <br /> <br />
                  </>
                )}{' '}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
