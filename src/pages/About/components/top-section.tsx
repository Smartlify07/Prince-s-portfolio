import ProfileImage from '@/../public/assets/images/about/Profile Image.png';
import Icon from '@/../public/assets/icons/About Me Button.svg';
import Badge from '@/ui/badge';

export const AboutTopSection = () => {
  return (
    <div className="flex items-center py-6 md:w-full overflow-hidden top-0 absolute gap-11 px-4 md:justify-between">
      <Badge className="text-grey-opaque -mt-40 shrink-0 text-xl/[20px] opacity-50 font-medium flex items-center gap-2">
        <img src={Icon} alt="user-icon" /> About Me
      </Badge>
      <img
        src={ProfileImage}
        alt={'Brain looking thing'}
        className="w-[241px] md:w-[300px] md:right-0"
      />
    </div>
  );
};
