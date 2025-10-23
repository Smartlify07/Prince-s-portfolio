import { socialLinks } from '@/lib/constants';
import Button from '@/ui/button';

export const ReachOutButton = () => {
  return (
    <Button
      as="a"
      href={socialLinks.linkedin}
      target="_blank"
      variant="outline"
      className="flex whitespace-nowrap items-center gap-2"
    >
      Reach out on Linkedin
    </Button>
  );
};
