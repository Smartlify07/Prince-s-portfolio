import { ArrowRightUp } from '@solar-icons/react';
import Badge from '@/ui/badge';
import { motion, useAnimate } from 'motion/react';
import { useNavigate } from 'react-router';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';

export const ProjectCard = ({
  shortDescription,
  category,
  image,
  id,
  previewTitle,
  className,
}: Project & { className?: string }) => {
  const [scope, animate] = useAnimate();
  const handleMouseEnter = () => {
    animate('button', { rotate: 45 });
  };
  const handleMouseLeave = () => {
    animate('button', { rotate: 0 });
  };
  const router = useNavigate();
  return (
    <motion.div
      onClick={() => {
        router(`/projects/${id}`);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scope}
      className={cn(
        'relative project-card cursor-pointer w-full shrink-0',
        className
      )}
    >
      <div className="rounded-lg h-[309px] w-full">
        <img
          src={image}
          alt={previewTitle + 'thumbnail'}
          className="w-full h-[309px] aspect-[436.72/331.00] object-cover rounded-lg"
        />
      </div>
      <div className="project-gradient absolute left-0 overflow-clip bottom-0 flex flex-col font-geist py-4 px-5 gap-2">
        <Badge className="text-white text-[10px] z-10 bg-[#0F0F1A]/80 tracking-[0%] self-start">
          {category}
        </Badge>
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl/[30.8px] text-[#EDEDEB] tracking-[-0.88px] text-start">
              {previewTitle}
            </h2>
            <p className="text-sm text-[#909090] font-normal h-10 line-clamp-2 ">
              {shortDescription}...
            </p>
          </div>
          <button className="cursor-pointer">
            <ArrowRightUp
              weight="Broken"
              className="text-[#909090]  shrink-0"
              size={16}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
