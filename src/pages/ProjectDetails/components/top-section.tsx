import Badge from '@/ui/badge';
import type { Project } from '@/lib/types';
import DeviceVector from '@/../public/assets/icons/deviceVector.svg';
import DesignVector from '@/../public/assets/icons/designVector.svg';
import Figma from '@/../public/assets/icons/Figma.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import ResponsiveDesign from '@/../public/assets/icons/responsive_design.svg';
const categories = [
  { icon: DesignVector, title: 'UX Design' },
  { icon: Layers, title: 'UI Design' },
  { icon: Figma, title: 'Figma' },
  { icon: DeviceVector, title: 'Mobile First' },
  { icon: ResponsiveDesign, title: 'Responsive Design' },
];

export const TopSection = ({ title, description }: Partial<Project>) => {
  return (
    <section className="w-full flex flex-col relative">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-end">
          <h2 className="text-[40px]/[50px] font-medium gradient-text tracking-[-2px] text-start">
            {title}{' '}
          </h2>
        </div>
        <p className="text-sm/[20px] text-[#909090]">{description}</p>
        <div className="flex items-center gap-2">
          {categories.map((category) => (
            <Badge
              shadowSize="small"
              className="text-grey-opaque text-xs/[20px] font-medium flex items-center gap-2"
            >
              <img src={category.icon} alt={category.title + '-icon'} />
              {category.title}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
