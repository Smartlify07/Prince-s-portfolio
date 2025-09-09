import CollaborationImage from '/assets/images/about/collab2.png';
import ArchitectImage from '/assets/images/about/architect.png';
import EfficientImage from '/assets/images/about/efficient.png';
import PrioritizeImage from '/assets/images/about/prioritize.png';

export type Value = {
  title: string;
  subtitle: string;
  image: string;
};

export const uniqueValueProps: Value[] = [
  {
    title: 'Collaborative Engagement',
    subtitle:
      'My collaboration isn’t a phase—it’s my ethos. From concept to execution, I actively engage my clients in a seamless design journey. Your vision is more than heard; it’s an integral part of every pixel I craft. Transparent communication, strategic integration, and an empowering approach define my partnership.',
    image: CollaborationImage,
  },
  {
    title: 'Architect’s Touch',
    subtitle:
      'In the realm of design, my creations bear the distinct mark of the architect’s touch. Each pixel, each line, meticulously placed to build a visual masterpiece. It’s not just about aesthetics; it’s an architectural approach to user experience, where every element serves a purpose, resonating with precision and thoughtfulness.',
    image: ArchitectImage,
  },
  {
    title: 'Efficient and Trim',
    subtitle:
      'I embrace a philosophy of lean and mean aesthetics. It’s not about excess; it’s about stripping away the unnecessary to reveal the essence of design. My designs epitomize sleekness, purposefulness, and impact, capturing the allure of simplicity and the robustness of precision.',
    image: EfficientImage,
  },
  {
    title: 'Prioritize Strategy',
    subtitle:
      'Within my realm, strategy assumes the forefront, with design closely trailing behind. It extends beyond the mere creation of visually captivating interfaces; it involves strategic deliberation that forms the bedrock of each design choice. My strategy serves as the guiding compass in my creative process, guaranteeing the seamless alignment of every design with your distinct goals and objectives.',
    image: PrioritizeImage,
  },
];
