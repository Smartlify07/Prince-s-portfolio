import Badge from '@/ui/badge';
import CaretIcon from '@/../public/assets/icons/Curve.svg';
import DesignHighlightImage from '@/../public/assets/images/projects/design-highlight-2.webp';
import type { Project } from '@/lib/types';

export const OutcomeSection = ({ project }: { project: Project }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-11">
        <Badge
          shadowSize="small"
          className="text-[#EDEDEB] text-base font-medium self-start"
        >
          Solution
        </Badge>

        <div className="flex flex-col gap-6">
          <h1 className="text-[40px]/[52px] font-medium linear-gradient-text-1 -tracking-smaller">
            Design Outcome{' '}
          </h1>
          <p className="text-sm text-grey-9">{project.outcome.description}</p>

          <div className="flex flex-col gap-2">
            <h1 className="gradient-text font-medium text-xl linear-gradient-text-1">
              Key Features:
            </h1>

            <div className="flex flex-col gap-2">
              {project.outcome?.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img
                    src={CaretIcon}
                    alt="orange-chevron-down"
                    className="size-2 mt-2"
                  />
                  <p className="text-sm text-grey-9">
                    <strong className="font-bold">{feature.bold}:</strong>{' '}
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div
          className={`flex flex-col lg:grid gap-6 lg:grid-cols-2 items-start`}
        >
          {project.outcomeImages?.lg.map((img, index) => (
            <picture
              key={index}
              className={`${img.fullWidth ? 'col-span-2 w-full' : 'w-full'}`}
            >
              <source
                media="(min-width: 1024px)"
                srcSet={img?.src ?? DesignHighlightImage}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={project.outcomeImages?.sm[index].src}
              />

              <img
                className={`lg:h-[600px] rounded-2xl lg:rounded-3xl object-cover ${
                  img.fullWidth ? 'col-span-2 w-full' : 'w-full'
                } ${
                  project.outcomeImages?.sm[index].height
                    ? `h-[500px]`
                    : 'h-[356px]'
                }`}
                src={img.src ?? DesignHighlightImage}
                alt={`${project.title} outcome-image`}
              />
            </picture>
          ))}
        </div>
        <div className={`grid gap-6 lg:grid-cols-2 items-start`}>
          {/* Font */}
          <picture className="">
            <source
              media="(min-width: 1024px)"
              srcSet={
                project.designChoiceImages?.lg.font ?? DesignHighlightImage
              }
            />
            <source
              media="(max-width: 1023px)"
              srcSet={
                project.designChoiceImages?.sm.font ?? DesignHighlightImage
              }
            />
            <img
              className={`h-[500px] w-full lg:w-full lg:h-[600px] object-cover rounded-2xl lg:rounded-3xl`}
              src={project.designChoiceImages?.lg.font ?? DesignHighlightImage}
              alt={`${project.title} font design`}
            />
          </picture>

          {/* Colors */}
          <picture className="w-full">
            <source
              media="(min-width: 1024px)"
              srcSet={
                project.designChoiceImages?.lg.colors ?? DesignHighlightImage
              }
            />
            <source
              media="(max-width: 1023px)"
              srcSet={
                project.designChoiceImages?.sm.colors ?? DesignHighlightImage
              }
            />
            <img
              className={`h-[500px] w-full lg:w-full lg:h-[600px] lg:object-cover rounded-2xl lg:rounded-3xl`}
              src={
                project.designChoiceImages?.lg.colors ?? DesignHighlightImage
              }
              alt={`${project.title} color design`}
            />
          </picture>
        </div>

        {/* Timeline Image */}
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={project.timeLineImage?.lg ?? DesignHighlightImage}
          />
          <source
            media="(max-width: 1023px)"
            srcSet={project.timeLineImage?.sm ?? DesignHighlightImage}
          />
          <img
            src={project.timeLineImage?.lg ?? DesignHighlightImage}
            alt="design-highlight-image"
            className="w-full h-[356px] lg:h-[600px] object-cover rounded-2xl"
          />
        </picture>
      </div>
    </section>
  );
};
