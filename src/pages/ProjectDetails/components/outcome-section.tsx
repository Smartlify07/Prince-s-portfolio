import Badge from '@/ui/badge';
import CaretIcon from '@/../public/assets/icons/Curve.svg';
import DesignHighlightImage from '@/../public/assets/images/projects/design-highlight-2.png';
import type { Project } from '@/lib/types';

export const OutcomeSection = ({
  outcome,
}: {
  outcome: Project['outcome'];
}) => {
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
          <p className="text-sm text-grey-9">{outcome.description}</p>

          <div className="flex flex-col gap-2">
            <h1 className="gradient-text font-medium text-xl linear-gradient-text-1">
              Key Features:
            </h1>

            <div className="flex flex-col gap-2">
              {outcome?.features.map((feature, index) => (
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

      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
    </section>
  );
};
