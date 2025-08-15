import ArrowCurve from '/public/assets/icons/Curve.svg';

export const CardWithMarker = ({
  keyword,
  text,
}: {
  keyword?: string;
  text?: string;
  title?: string;
}) => {
  return (
    <div className="grid gap-2">
      <div className="flex items-start gap-2">
        <img src={ArrowCurve} className="mt-1" />
        <p className="text-sm/[150%] text-grey-9 font-normal">
          {keyword && <span className="font-bold">{keyword} </span>}
          {text}
        </p>
      </div>
    </div>
  );
};
