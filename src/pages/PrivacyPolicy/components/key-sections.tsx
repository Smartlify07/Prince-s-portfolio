import { privacyPolicy } from '@/lib/privacy-policy';
import { Markup } from 'interweave';

export const KeySections = () => {
  return (
    <section className="grid gap-14">
      {privacyPolicy.map((item, index) => (
        <KeySection {...item} key={index} />
      ))}
    </section>
  );
};

const KeySection = ({
  title,
  description,
  list,
}: {
  title: string;
  description: string;
  list?: string[];
}) => {
  return (
    <div className="grid gap-4">
      <h2 className="gradient-text text-[20px] font-medium">{title}</h2>
      <p className="text-sm/[150%] text-grey-9">
        <Markup content={description} />
      </p>
      {list && (
        <ul className="grid gap-0">
          {list?.map((item, i) => (
            <li
              className="text-sm/[150%] flex items-start gap-1 text-grey-9"
              key={i}
            >
              <span className="bg-grey-9 rounded-full size-1 shrink-0 mt-2"></span>{' '}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
