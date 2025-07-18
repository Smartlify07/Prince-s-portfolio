import { maxwellEv } from '@/lib/projects/maxwell-ev';
import React from 'react';

export const ApproachSection = () => {
  const content = maxwellEv.approach.content.split('\n');

  return (
    <section className="grid gap-8 pb-10 border-b border-b-grey-4/60">
      <header>
        <h1 className="gradient-text text-center font-medium text-[40px]/[52px] -tracking-smaller">
          My Approach
        </h1>
      </header>

      <div className="grid gap-2">
        <div className="grid gap-2">
          <h3 className="gradient-text font-medium text-xl">
            {maxwellEv.approach.title}
          </h3>
          <p className="text-grey-opaque font-bold text-sm/[150%]">
            {maxwellEv.approach.subtitle}
          </p>
        </div>
        <p className="text-grey-9 text-sm/[150%]">
          {content.map((line, index) => (
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
    </section>
  );
};
