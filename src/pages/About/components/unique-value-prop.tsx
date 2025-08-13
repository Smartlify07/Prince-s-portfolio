import { uniqueValueProps } from '@/lib/constants';
import Card from '@/ui/card';
import { CallToActionSection } from './cta';
import { cn } from '@/lib/utils';

export const UniqueValueProp = () => {
  return (
    <section className="px-4 md:px-0 grid gap-14">
      <div className="grid gap-12">
        <header>
          <h1 className="text-[40px] font-medium font-geist gradient-text md:text-center">
            Why Am I Unique?
          </h1>
        </header>
        <div className="border-t border-dashed md:border-none border-t-grey-9/60">
          {uniqueValueProps.map((valueProp, index) => (
            <ValuePropCard key={index} index={index} {...valueProp} />
          ))}
        </div>
      </div>

      <CallToActionSection
        title="Looking for UX/UI research or product branding?"
        subtitle="Simply post your query and I’ll promptly reach out to you.
"
      />
    </section>
  );
};

const ValuePropCard = ({
  title,
  subtitle,
  image,
  index,
}: {
  title: string;
  subtitle: string;
  image: string;
  index: number;
}) => {
  return (
    <Card
      className={cn(
        'shadow-none bg-sidebar-bg rounded-none py-9 border-t border-b border-grey-4/60 flex flex-col gap-6 font-geist px-0',
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className="flex items-start flex-col gap-2">
        <h1 className="gradient-text font-medium text-xl -tracking-smaller">
          {title}
        </h1>
        <p className="text-sm/[150%] text-grey-9">{subtitle}</p>
      </div>
      <div className="rounded-2xl shrink-0 md:w-[300px] md:h-[130px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-2xl object-cover shrink-0 shadow-[0_0_5.5px_0_rgba(86,86,119,0.25)]"
        />
      </div>
    </Card>
  );
};
