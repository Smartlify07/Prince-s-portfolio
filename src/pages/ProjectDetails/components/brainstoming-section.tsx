import { maxwellEv } from '@/lib/projects/maxwell-ev';
import React from 'react';
import { CardWithMarker } from './card-with-marker';
import BrainstormImage from '@/../public/assets/images/projects/brainstorm.png';

export const BrainstormSection = () => {
  const description = maxwellEv.brainstorm.description.split('\n');

  return (
    <section className="grid gap-6 font-geist pb-10 border-b border-b-grey-4/60 md:flex md:items-center">
      <div className="grid gap-6 md:w-7/12">
        <div className="grid gap-2">
          <h1 className="gradient-text text-start   font-medium text-[40px]/[52px] -tracking-smaller">
            Define: Brainstorming and Brand Harmony
          </h1>
          <p className="text-sm/[150%] text-grey-9">
            {' '}
            {description.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < description.length - 1 && (
                  <>
                    <br /> <br />
                  </>
                )}{' '}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="grid gap-4">
          {maxwellEv.brainstorm.content.map((item, i) => (
            <div key={i} className="grid gap-2">
              <h3 className="text-xl -tracking-smaller font-medium gradient-text">
                {item.title}
              </h3>
              <p className="text-sm/[150%] text-grey-9">{item.description}</p>
              <div className="px-4 grid gap-2">
                {item.blocks.map((item, i) => (
                  <CardWithMarker {...item} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-5/12 rounded-2xl">
        <img src={BrainstormImage} className="rounded-2xl object-cover" />
      </div>
    </section>
  );
};
