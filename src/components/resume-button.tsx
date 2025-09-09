import { socialLinks } from '@/lib/constants';
import Button from '@/ui/button';
import { CloudDownload } from '@solar-icons/react';

export const DownloadResumeButton = () => {
  return (
    <a target="_blank" href={socialLinks.drive}>
      <Button variant="outline" className="flex items-center gap-2 shrink-0">
        <CloudDownload className="text-[#EDEDEB]" size={16} />
        Download Resume
      </Button>
    </a>
  );
};
