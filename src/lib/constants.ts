import AdobeIllustrator from '/assets/icons/Adobe_Illustrator.svg';
import Jira from '/assets/icons/Jira.svg';
import Framer from '/assets/icons/Framer.svg';
import Design from '/assets/icons/designVector.svg';
import Layers from '/assets/icons/Layers.svg';
import Global from '/assets/icons/Global.svg';
import Settings from '/assets/icons/Settings.svg';
import Figma from '/assets/icons/Figma.svg';
import Smartphone from '/assets/icons/deviceVector.svg';

// Testimonials
import Amaka from '/assets/images/testimonials/amaka.png';
import TymeTech from '/assets/images/testimonials/tyme.png';
import SaferVest from '/assets/images/testimonials/Safervest_Logo.png';
import StudyVault from '/assets/images/testimonials/StudyVaultLogo.png';
import SaferVestFounder from '/assets/images/testimonials/David_U.png';
import StudyVaultFounder from '/assets/images/testimonials/Kelechi_O.png';
import KaleriAI from '/assets/images/testimonials/KaleriAILogo.png';
import KaleriAIFounder from '/assets/images/testimonials/Smith_A_Kaleri.png';
import BlesSoftwareLogo from '/assets/images/testimonials/Bles.png';
import BlesSoftwareFounder from '/assets/images/testimonials/Stas.png';

import BusBooks from '/assets/images/projects/busbooks.png';
import VifZack from '/assets/images/projects/Vifzack.png';
import BlesSoftware from '/assets/images/projects/Bles_Software.png';
import MaxWellEv from '/assets/images/projects/Maxwell_Landing_Page.png';
import KaleriAi from '/assets/images/projects/Kaleri.png';
import CrawlerAI from '/assets/images/projects/Crawler.png';

import ResearchIcon from '/assets/images/services/Research Image.svg';
import Conceptualize from '/assets/images/services/Conceptualize Image.svg';
import Testing from '/assets/images/services/UX Testing Image.svg';
import Implement from '/assets/images/services/Implement Image.svg';

import HealthCareIcon from '/assets/images/services/Healthcare Image.svg';
import FintechIcon from '/assets/images/services/Fintech Image.svg';
import FitnessIcon from '/assets/images/services/Health & Fitness Image.svg';
import EdTech from '/assets/images/services/EdTech Image.svg';
import FashionDesign from '/assets/images/services/Fashion & Design Image.svg';
import Food from '/assets/images/services/Food & Restaurant Image.svg';
import Lawyers from '/assets/images/services/Lawyers & Attorneys Image.svg';
import Commerce from '/assets/images/services/Retail & Ecommerce Image.svg';
import NonProfit from '/assets/images/services/Non-Profit Organizations Image.svg';

import Jira2 from '/assets/images/about/jira.svg';
import Figma2 from '/assets/images/about/figma.svg';
import Protopie from '/assets/images/about/protopie.svg';
import Framer2 from '/assets/images/about/framer.svg';
import Lovalble from '/assets/images/about/Lovable.svg';
import Maze from '/assets/images/about/maze.svg';
import Jitter from '/assets/images/about/jitter.svg';
import Adobe from '/assets/images/about/jitter.svg';
import Gpt from '/assets/images/about/gpt.svg';
import Linear from '/assets/images/about/linear.svg';
import Shots from '/assets/images/about/shots.svg';

import CollaborationImage from '/assets/images/about/collab2.png';
import ArchitectImage from '/assets/images/about/architect.png';
import EfficientImage from '/assets/images/about/efficient.png';
import PrioritizeImage from '/assets/images/about/prioritize.png';

import UserCenteredDesignImage from '/assets/images/services/exclusive-deals/user-centered-design.png';
import InnovativeSolutionsImage from '/assets/images/services/exclusive-deals/innovative-solutions.png';
import ExperiencedTeam from '/assets/images/services/exclusive-deals/experienced-team.png';
import UXResearch from '/assets/images/services/exclusive-deals/ux-research.png';
import EnterpriseUX from '/assets/images/services/exclusive-deals/enterprise-ux.png';
import WebAppDesign from '/assets/images/services/exclusive-deals/web-app-design.png';
import MobileAppDesign from '/assets/images/services/exclusive-deals/mobile-app.png';
import WebDesign from '/assets/images/services/exclusive-deals/web-design.png';
import LandingPage from '/assets/images/services/exclusive-deals/landing-page.png';
import WebRedesign from '/assets/images/services/exclusive-deals/web-redesign.png';
import BrandIdentity from '/assets/images/services/exclusive-deals/brand-identity.png';
import LogoDesign from '/assets/images/services/exclusive-deals/logo-design.png';
import Illustration from '/assets/images/services/exclusive-deals/illustration-design.png';
import UXTester from '/assets/images/services/exclusive-deals/ux-tester.png';
import UXAudit from '/assets/images/services/exclusive-deals/ux-audit.png';

type Tool = {
  Icon: string;
  name: string;
};
type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
};
export const tools: Tool[] = [
  {
    Icon: Design,
    name: 'UX Design',
  },

  {
    Icon: Layers,
    name: 'UI Design',
  },

  {
    Icon: Global,
    name: 'Web Design',
  },

  {
    Icon: Jira,
    name: 'Jira',
  },

  {
    Icon: Smartphone,
    name: 'Mobile App',
  },
  {
    Icon: Settings,
    name: 'Research',
  },

  {
    Icon: Figma,
    name: 'Figma',
  },

  {
    Icon: Framer,
    name: 'Framer',
  },

  {
    Icon: AdobeIllustrator,
    name: 'Adobe Illustrator',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Amaka I.',
    position: 'Product Manager at Tymetech',
    testimonial:
      'Ezekiel didn’t just design our product — he transformed it. Every screen now feels intentional and user-focused. Working with him was one of the best decisions we made for our MVP.',
    images: [Amaka, TymeTech],
  },
  {
    id: 2,
    name: 'Smith A.',
    position: 'Co-founder at Kaleri AI ',
    testimonial:
      'His designs speak louder than words. From kickoff to handoff, Ezekiel was responsive, thoughtful, and insanely creative. We got compliments the week we launched.',
    images: [KaleriAIFounder, KaleriAI],
  },
  {
    id: 3,
    name: 'Stas S.',
    position: 'CEO at Bles Software',
    testimonial:
      'We needed a modern, mobile-friendly interface that still worked for our older and newly clients — Ezekiel nailed both. His ability to balance design beauty with usability is next level.',
    images: [BlesSoftwareFounder, BlesSoftwareLogo],
  },
  {
    id: 4,
    name: 'David U.',
    position: 'Founder at Safevest Inc',
    testimonial:
      'Ezekiel joined our project mid-sprint and still managed to elevate the entire experience. His Figma work is clean, scalable, and a dream to hand off to devs.',
    images: [SaferVestFounder, SaferVest],
  },
  {
    id: 5,

    name: 'Kelechi O.',
    position: 'CEO & Back-End Engineer at StudyVault',
    testimonial:
      'Beyond the visuals, Ezekiel brings strategy. He asked smart questions we didn’t think of, and helped us shape a product our users now love. Total game-changer.',
    images: [StudyVaultFounder, StudyVault],
  },
];

export const projects: Project[] = [
  {
    title: 'BusBooks',
    description:
      'BusBooks is a cloud-based billing tool for transport providers. It simplifies how companies manage and invoice trips with flexible models.',
    category: 'Web Application',
    image: BusBooks,
  },
  {
    title: 'Vifzack',
    description:
      'Vifzack is a scalable SaaS platform designed to unify multiple communication channels, including WhatsApp, Email, LinkedIn, and Newsletters, into a single, streamlined inbox, while also offering secure document management via AWS cloud.\n The platform includes features such as AI-powered chat handling, role-based access control, real-time task tracking, intelligent search, and multi-language support. Tailored especially for professionals like real estate agents, Vifzack simplifies complex communication workflows and ensures data is easily accessible, secure, and organized. ',
    category: 'Web Application',
    image: VifZack,
  },
  {
    title: 'Bles Software -  (Clutch Landing Page)',
    description:
      'The Bles Software landing page is a modern, conversion-focused website designed to help the company attract and engage potential clients looking to outsource software development. The design emphasizes trust, professionalism, and seamless communication, guiding visitors to either view pricing or book a paid consultation.',
    category: 'Website',
    image: BlesSoftware,
  },
  {
    title: 'Maxwell EV Charging - (Landing Page)',
    description:
      'The Maxwell landing page is designed to present a clean, modern, and informative user interface for promoting the company’s electric vehicle (EV) charging solutions. It targets individuals, businesses, and institutions seeking reliable, accessible, and efficient EV infrastructure and mobile app support.',
    category: 'Website',
    image: MaxWellEv,
  },
  {
    title: 'Kaleri AI Health Management App',
    description:
      'Kaleri AI is a data-driven weight management application that leverages artificial intelligence to deliver sustainable health outcomes. The app is designed to support users on their weight loss journey through personalized insights, motivational feedback, and progress tracking.',
    category: 'Mobile Application',
    image: KaleriAi,
  },
  {
    title: 'Crawler (AI-Powered Site Analysis)',
    description:
      'Monitor your website’s performance by tracking IP addresses, managing content that violates Google policies, and optimizing ad placements for increased revenue—all while leveraging AI to enhance your content strategy.',
    category: 'Web Application',
    image: CrawlerAI,
  },
];

export const exclusiveDeals = [
  {
    title: 'User-Centered Design',
    description:
      'Embrace a truly user-centered approach that drives higher satisfaction, deeper engagement, and intuitive product designs that show your users they’re genuinely valued. Our UX design process is rooted in empathy and precision—prioritizing your target audience’s thoughts, behaviors, needs, and motivations to create experiences that resonate, convert, and build lasting loyalty.',
    image: UserCenteredDesignImage,
  },
  {
    title: 'Innovative Solutions',
    description:
      'Bring your visionary designs to life with cutting-edge UI/UX features like animated microinteractions, multimodal interfaces, parallax scrolling, and location-based experiences. Leverage the latest in design frameworks, wireframing tools, advanced editing software, and generative AI to create immersive, intuitive, and future-ready digital products that captivate users and set your brand apart.',
    image: InnovativeSolutionsImage,
  },
  {
    title: 'UX Audit',
    description:
      'Performs comprehensive design audits—integrating A/B testing, behavioral analytics, and in-depth target audience research—to refine and optimize customer journey maps, ensuring each touchpoint aligns with user needs and maximizes product engagement and satisfaction.',
    image: UXAudit,
  },
  {
    title: 'UX Tester',
    description:
      'Elevate your digital experience with cutting-edge UX testing services—meticulously designed and executed with precision, insight, and a deep understanding of user behavior—driven by my unmatched expertise in creating seamless, user-centric interfaces that convert and delight.',
    image: UXTester,
  },
  {
    title: 'Illustration',
    description:
      'Crafting immersive visual narratives that captivate audiences through emotionally compelling storytelling and breathtaking design—strategically amplifying brand identity, impact, and engagement.',
    image: Illustration,
  },
  {
    title: 'Brand Identity',
    description:
      'I design cohesive and strategic visual identities that authentically reflect your brand’s core values and connect emotionally with your target audience. From color palettes and typography to logos and design systems, every element is thoughtfully crafted to build recognition, trust, and long-term brand loyalty across all touchpoints.',
    image: BrandIdentity,
  },
  {
    title: 'Logo Design',
    description:
      'I transform abstract concepts into iconic, memorable visual identities that define your brand and instantly connect with your audience. By blending strategic thinking with creative execution, I craft brand symbols that stand the test of time — versatile across digital and print, and powerful enough to speak without words.',
    image: LogoDesign,
  },
  {
    title: 'Web Redesign',
    description:
      'Let’s collaborate to transform your website into a narrative-driven experience that informs, inspires, and engages. By weaving visual storytelling into every layer of UI design, I create custom websites that balance clarity with creativity — built to resonate with modern users and adapt to their evolving digital expectations.',
    image: WebRedesign,
  },
  {
    title: 'Landing Page',
    description:
      'I create visually compelling and conversion-focused digital interfaces that make powerful first impressions and drive meaningful user actions. With a strategic blend of design psychology, branding, and user behavior insights, I help businesses turn casual visitors into loyal customers — aligning every visual touchpoint with your business goals.',
    image: LandingPage,
  },
  {
    title: 'Web Design',
    description:
      'I design modern, high-performing websites that not only look stunning but also deliver smooth, intuitive experiences across all devices. By combining strategic UX thinking with clean UI aesthetics, I help businesses create digital experiences that captivate users, reduce friction, and drive results.',
    image: WebDesign,
  },
  {
    title: 'Mobile App',
    description:
      'I specialize in crafting intuitive, minimal, and high-performing mobile app interfaces that feel natural to use — across iOS, Android, and hybrid platforms.My designs prioritize clarity, responsiveness, and user behavior, helping products drive engagement, improve retention, and deliver a seamless mobile experience.',
    image: MobileAppDesign,
  },
  {
    title: 'Web App Design',
    description:
      'I craft user-centered web applications that align with your brand story and resonate deeply with your target audience. Through thoughtful design, strategic storytelling, and intuitive interfaces, I help brands turn ideas into digital experiences that build trust, engagement, and long-term loyalty.',
    image: WebAppDesign,
  },
  {
    title: 'Enterprise UX',
    description:
      'Discover innovative UI/UX design solutions crafted for both administrators and end-users — with a focus on usability, speed, and seamless cross-platform performance. I specialize in designing efficient, scalable interfaces that work flawlessly across web, mobile, and tablet, ensuring a unified and intuitive experience for every user.',
    image: EnterpriseUX,
  },
  {
    title: 'UX Research',
    description:
      'Enhance your user experience with strategic UX research, elevate design decisions, and drive innovation by deeply understanding user behavior, needs, and motivations through actionable insights.',
    image: UXResearch,
  },
  {
    title: 'Experienced Team',
    description:
      "From brainstorming ideas to developing MVPs and designing intricate products, I've successfully navigated this journey countless times. Over 8 companies have benefited from my UI/UX consulting services, enabling them to create, scale, and maintain a variety of digital products and platforms. My expertise in UX research and UI/UX design ensures that I deliver exceptional results on every project.",
    image: ExperiencedTeam,
  },
];

export const designProcesses = [
  {
    title: 'Research',
    list: [
      'Develop User Personas',
      'Create Customer Journey Maps',
      'Define Business Requirements',
      'Perform Card Sorting',
      'Organize Focus Groups',
    ],
    icon: ResearchIcon,
  },
  {
    title: 'Conceptualize',
    list: [
      'User flow diagram',
      'Develop Information Architecture',
      'Moodboard',
      'Lo-fi Prototypes',
      'Create Wireframes',
    ],
    icon: Conceptualize,
  },
  {
    title: 'UX Testing',
    list: [
      'Evaluate Accessibility',
      'Assess Emotional Responses',
      'Conduct Usability Testing',
    ],
    icon: Testing,
  },

  {
    title: 'Implement',
    list: [
      'Visual Design',
      'Ensure Design Quality Control',
      'Perform Iterations,',
    ],
    icon: Implement,
  },
];

type Industry = {
  icon: string;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    icon: HealthCareIcon,
    title: 'Healthcare',
    description:
      'My UI/UX design services can be customized to provide specialized and engaging web designs that meet your specific needs. These indispensable tools are suitable for both patients and physicians.',
  },
  {
    icon: FintechIcon,
    title: 'Fintech',
    description:
      'My user-centered design (UCD) approach helps many banking and finance firms to shine in the competitive landscape by creating digital products that make use of the latest technology. Stay ahead in financial services with our innovative UI/UX web design services.',
  },
  {
    icon: FitnessIcon,
    title: 'Health & Fitness',
    description:
      'Navigate the digital health revolution by providing you with a comprehensive and user-friendly website design that will make it easy for your customers to access your services. With my expertise in web design, I can create a responsive and engaging platform that will showcase your health and fitness brand in the best possible light. brand to the next level.',
  },
  {
    icon: EdTech,
    title: 'EdTech',
    description:
      'I design engaging e-learning interfaces to enhance interactive learning experiences, deliver personalized content, and foster student-teacher collaboration, transforming education.',
  },
  {
    icon: FashionDesign,
    title: 'Fashion & Design',
    description:
      'I design digital solutions in terms of UI/UX design services to help captivate audiences, showcase products beautifully, and enable effortless online shopping experiences.',
  },
  {
    icon: Food,
    title: 'Food & Restaurant',
    description:
      'Deliver unparalleled convenience to your food business with premium UI design solutions. Enhance your food-based startup’s reputation by providing seamless digital experiences through my expert mobile and web app designs.',
  },

  {
    icon: Lawyers,
    title: 'Lawyers & Attorneys',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: Commerce,
    title: 'Retail & Ecommerce',
    description:
      'Your e-commerce performance can skyrocket with my UX/UI design expertise. Immerse yourself in visually stunning and user-friendly online retail experiences. Utilize my specialized services to drive conversions and nurture customer loyalty.',
  },

  {
    icon: NonProfit,
    title: 'Non-Profit Organizations',
    description: `Forge the future of your non-profit organization with my innovative mobile app UI/UX design services. Connect and mobilize your NGO's target audience, promoting a lasting impact and global reach.`,
  },
];

export const pricing = [
  {
    title: 'Full Time UI/UX design',
    list: [
      'Design support — 40 hrs/week',
      'UI/UX design for web & mobile',
      'Collaboration via Slack, Zoom, or your tools',
      'Fast iteration cycles for agile teams',
      'User research, wireframes, and prototypes',
      'Design system setup or upkeep',
      'Brand consistency across screens',
      'Developer handoff and design QA',
      'Priority access & quick turnaround',
      'Monthly flat rate or contract billing',
    ],
  },

  {
    title: 'Framer Design',
    list: [
      'Tailored Framer website design to fit your brand.',
      'Responsive layouts for all devices.',
      'Up to 3 revisions included',
      'User-friendly CMS for easy content management.',
      'Engaging animations for a modern user experience.',
      'Figma to Framer handoff for separate designs.',
      'Optimized for fast loading.',
      'No-code handoff for easy content updates.',
      'Flexible support options to suit your needs.',
    ],
  },
  {
    title: 'Freelance',
    list: [
      'One-time project with clear scope and fixed deliverables.',
      'Custom UI/UX design for web or mobile.',
      'Visuals that reflect your brand and engage users.',
      '2–4 revision rounds to refine your vision.',
      'Quick turnaround to meet your launch goals.',
      'Flat-rate or milestone pricing options.',
    ],
  },
];

export type Faq = {
  title: string;
  subtitle: string;
};
export const faqs: Faq[] = [
  {
    title: 'What services do you offer?',
    subtitle:
      'I offer UI/UX design, brand design, and no-code development. This includes wireframing, user flows, design systems, website/app design, branding, and building MVPs with tools like Framer, and more.',
  },
  {
    title: 'What’s your design process like?',
    subtitle:
      'My process includes discovery, research, wireframes, visual design, prototyping, testing, and iteration. I prioritize collaboration and clarity at every stage to ensure the final product aligns with your goals.',
  },
  {
    title: 'Do you only work with startups or also with established brands?',
    subtitle:
      'Both! I work with early-stage startups, scaling teams, and established brands. Each project is tailored to your current stage, goals, and audience.',
  },
  {
    title: 'What tools do you use?',
    subtitle:
      'I primarily use Figma for UI/UX design, Notion, Jira and FigJam for planning and collaboration, and Framer for no-code builds. I also adapt to your preferred stack when needed.',
  },
  {
    title: 'How long does a typical project take?',
    subtitle:
      'It depends on the scope. A simple landing page might take 1–2 weeks, while full product design or branding could take 4–8+ weeks. Timelines are always clear before we begin.',
  },
  {
    title: 'Can you work with my existing brand or design system?',
    subtitle:
      'Absolutely. I can enhance your current brand or work within your design system. I can also build one from scratch if needed.',
  },
  {
    title: 'Do you offer revisions?',
    subtitle:
      'Yes, revisions are part of the process. I work closely with clients to iterate based on feedback and ensure we arrive at the best solution together.',
  },
  {
    title: 'How much do you charge for a project?',
    subtitle:
      "Pricing is influenced by the project's scope, timeline, and complexity. I provide both flexible and fixed pricing options for UI/UX design, branding, and no-code development. Generally, project costs start at around $1,300.",
  },
  {
    title: 'What do you need from me to get started?',
    subtitle:
      'A clear idea of your goals, timeline, and any references or materials you already have. We’ll also have a kickoff call to align expectations and set everything in motion.',
  },
  {
    title: 'Can you build the design using no-code tools?',
    subtitle:
      'Definitely. I can bring designs to life using Framer, or other no-code platforms — perfect for MVPs, marketing sites, and scalable web apps.',
  },
  {
    title: 'Do you work solo or with a team?',
    subtitle:
      'While I handle most projects independently, I collaborate with a trusted network of developers, writers, and researchers if the project requires a larger scope.',
  },
];

export const toolsUsed = [
  {
    title: 'Jira',
    icon: Jira2,
  },
  {
    title: 'Figma',
    icon: Figma2,
  },
  {
    title: 'Protopie',
    icon: Protopie,
  },
  {
    title: 'Framer',
    icon: Framer2,
  },
  {
    title: 'Lovable',
    icon: Lovalble,
  },
  {
    title: 'Maze',
    icon: Maze,
  },
  {
    title: 'Jitter',
    icon: Jitter,
  },
  {
    title: 'Adobe',
    icon: Adobe,
  },
  {
    title: 'ChatGPT',
    icon: Gpt,
  },
  {
    title: 'Linear',
    icon: Linear,
  },
  {
    title: 'Shots',
    icon: Shots,
  },
];

export type Moral = {
  title: string;
  subtitle: string;
};
export const morals: Moral[] = [
  {
    title: 'Aim for Success',
    subtitle:
      'I am dedicated to achieving success in every aspect of design, where each creation tells a victorious tale. In the world of design, setting high goals is more than just an objective – it is my unwavering pledge to deliver excellence.',
  },

  {
    title: 'Embrace Responsibility',
    subtitle:
      'I not only create designs; I welcome the responsibility of crafting experiences that resonate deeply. Throughout my design journey, responsibility isn’t a weight to bear but a guiding compass that leads me to create impactful works.',
  },
  {
    title: 'Support One Another',
    subtitle:
      'Collectively, we intricately intertwine threads of creativity, bolstering each other to sculpt designs that truly resonate. Within my design profession, support acts as the unseen thread that seamlessly weaves together my varied talents into a harmonious masterpiece.',
  },
  {
    title: 'Deliberate, Then Act',
    subtitle:
      'Prior to each burst of creativity, I engage in deliberate contemplation, ensuring that my designs are infused with thoughtfulness and purpose. Within the realm of design, careful consideration precedes every move, resulting in impactful and purposeful creations.',
  },
  {
    title: 'Execute with Precision',
    subtitle:
      'Precision defines my design ethos; each pixel, every detail meticulously crafted to perfect the user experience. In the design sphere, precision is not merely a talent; it serves as the foundation for creating seamless and refined works of art.',
  },
];

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
