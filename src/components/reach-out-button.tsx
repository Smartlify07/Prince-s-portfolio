import { socialLinks } from '@/lib/constants';
import Button from '@/ui/button';

export const ReachOutButton = () => {
  return (
    <a href={socialLinks.linkedin}>
      <Button
        variant="outline"
        className="flex whitespace-nowrap items-center gap-2"
      >
        Reach out on Linkedin
      </Button>
    </a>
  );
};
