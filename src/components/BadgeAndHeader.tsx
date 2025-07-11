import Badge from '../ui/badge';

const BadgeAndHeader = ({
  icon,
  alt,
  title,
  subtitle,
  badgeTitle,
}: {
  icon: string;
  alt: string;
  title: string;
  subtitle?: string;
  badgeTitle: string;
}) => {
  return (
    <div className="grid gap-4 font-geist place-items-center">
      <Badge className={'flex text-[#EDEDEB] items-center gap-2 opacity-50'}>
        <img src={icon} alt={alt} />
        {badgeTitle}
      </Badge>
      <div className="grid gap-4 place-items-center">
        <h1 className="text-[40px] gradient-text text-center font-medium tracking-[-0.88px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm/[150%] text-center text-[#909090]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default BadgeAndHeader;
