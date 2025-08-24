import type { Project } from '../types';
import VifzackImage from '@/../public/assets/images/projects/bike.png';

export const Vifzack: Project = {
  id: 2,
  title: 'Vifzack - Landing Page',
  subtitle: 'Vifzack',
  previewTitle: 'Vifzack | UI/UX Design',

  description:
    "is a smart, user-centric digital platform built to empower electric vehicle (EV) users with the ability to seamlessly locate, access, monitor, and manage EV charging stations in real time. Designed with both convenience and sustainability in mind, the platform offers a robust map-based interface for discovering nearby stations, detailed filtering by connector type, speed, and cost, live session tracking, secure wallet integration for hassle-free payments, and intelligent notifications to keep users updated on session progress. Whether you're a daily commuter, fleet manager, or eco-conscious traveler, Maxwell simplifies the entire EV charging journey through a clean, intuitive, and responsive user experience tailored for modern mobility.",
  category: 'Web Application',
  image: VifzackImage,
  shortDescription:
    'The Maxwell landing page presents a clean, modern user interface for promoting the company’s EV charging solutions. It targets individuals and businesses seeking reliable and efficient EV infrastructure.',
  goals: {
    description:
      'The primary goal of the design for Maxwell EV Charging was to create a seamless, intuitive, and eco-conscious user experience that removes friction from the EV charging process while promoting sustainable mobility.',
    goalBlocks: [
      {
        keyword: 'Simplify',
        text: ' discovery of nearby charging stations through a real-time, map-based interface.',
      },
      {
        keyword: 'Streamline',
        text: ' session management by offering live updates, estimated costs, and charging progress.',
      },
      {
        keyword: 'Promote trust and adoption',
        text: ' by delivering a visually clean, responsive, and accessible interface.',
      },
      {
        keyword: 'Support scalability ',
        text: 'through a modular design system that can evolve with more features and users over time.',
      },
    ],
    footer:
      'In essence, the design was built to empower EV users with control, clarity, and confidence, making the transition to electric smoother and more rewarding.',
  },
  challenge: {
    description:
      'Designing the Maxwell EV Charging platform came with several key challenges that required strategic thinking and user-centered solutions:',
    blocks: [
      {
        title: 'Real-Time Data Integration',
        subBlocks: [
          'Ensuring the UI could handle dynamic updates for charging station availability, session progress, and pricing without overwhelming the user.',
          'Ensuring low-latency updates across different network speeds and device types.',
          'Maintaining interface consistency while dynamically updating map markers and session stats.',
        ],
      },
      {
        title: 'Clarity While Driving',
        subBlocks: [
          'Designing with minimal distractions for safe use while on the move.',
          'Ensuring legibility and usability in various lighting conditions (e.g., night mode).',
          'Creating quick-access actions with minimal taps to reduce user effort and cognitive load.',
        ],
      },
      {
        title: 'Payment System Complexity',
        subBlocks: [
          'Supporting multiple payment options (wallet, card, subscription) securely.',
          'Clearly presenting session pricing, surcharges, and estimated total before charging begins.',
          'Managing failed or interrupted payment scenarios with graceful fallback flows.',
        ],
      },

      {
        title: 'Trust & Transparency',
        subBlocks: [
          'Building user confidence in station reliability and availability data',
          'Clearly differentiating between verified and unverified charging stations.',
          'Preventing misinformation or outdated pricing through real-time validations and reviews.',
        ],
      },
      {
        title: 'Designing for Scalability',
        subBlocks: [
          'Planning UI architecture that accommodates future features without requiring redesign.',
          'Ensuring design components are reusable across new modules like loyalty or fleet management.',
          'Maintaining consistency and performance across different user roles and workflows.',
        ],
      },
      {
        title: 'Balancing Aesthetics with Utility',
        subBlocks: [
          'Avoiding visual clutter while still displaying essential technical data.',
          'Aligning the visual identity with eco-conscious branding without compromising usability.',
          'Balancing minimalism with functionality, ensuring form does not interfere with function.',
        ],
      },
    ],
  },

  approach: {
    title: 'Discover',
    subtitle: 'Going out of the box',
    content:
      'Designing Maxwell EV Charging wasn’t just about creating screens, it was about building trust for EV users navigating a still-growing infrastructure.\n I began by listening: reading reviews, studying user complaints, and speaking to EV drivers. The stories were clear, charging felt unpredictable, confusing, and often frustrating. My goal became simple: make it effortless.\nI mapped out core journeys like finding a station, starting a session, and tracking progress, all while ensuring the interface worked on the go. Through low-fi wireframes and rapid testing, I validated what users needed most: clarity, speed, and confidence.\nI then crafted a clean, eco-conscious design system, focused on accessibility, real-time updates, and scalability. With large tap zones, intuitive flows, and helpful micro-interactions, the experience became both functional and friendly.\nWorking closely with developers, we refined the product until it felt right, not just in design, but in real-world use. The result? A platform that makes EV charging easier, smarter, and more reliable, for everyone on the road.',
  },

  brainstorm: {
    description:
      'When I was tasked with designing Maxwell EV Charging, I knew it had to be more than just functional—it needed to reflect the ease, confidence, and future-forward mindset of electric mobility. I began with a deep-dive brainstorming session, exploring how we could make the EV charging experience feel smarter, simpler, and beautifully human.\n I worked closely with stakeholders to align the platform’s visuals and interactions with Maxwell’s brand values—eco-conscious, reliable, and intuitive. The result? A consistent visual system that feels just as clean and forward-thinking as the technology it supports.',
    content: [
      {
        title: 'Key Design Elements',
        description:
          'I focused on three core pillars: clarity, accessibility, and trust.',
        blocks: [
          {
            keyword: 'Visual Clarity:',
            text: 'I used open layouts, soothing color gradients (green, blue, white), and sharp hierarchy to guide users effortlessly.',
          },
          {
            keyword: 'Modern Enhancements:',
            text: 'Custom iconography, smooth rounded UI components, and micro-interactions gave the app a polished, modern feel.',
          },
          {
            keyword: 'Typography',
            text: 'I selected typefaces that are readable and friendly, perfect for on-the-go use without sacrificing professionalism.',
          },
        ],
      },
      {
        title: 'Prototyping & Information Architecture',
        description:
          'I focused on three core pillars: clarity, accessibility, and trust.',
        blocks: [
          {
            text: 'To bring the experience to life, I first mapped the user journeys, locating a charger, starting a session, and monitoring progress. I created low-fidelity wireframes and moved quickly into interactive prototypes using Figma. Every detail was tested and iterated, from the session summary screen to the wallet integration.',
          },
          {
            text: 'Designing the structure also meant considering different users: daily drivers, fleet managers, and eco-conscious newbies. I built a navigation system that works for all.',
          },
        ],
      },
    ],
  },
  highlights: {
    description:
      'This project challenged me to design with purpose, not just polish. Some of my proudest elements include:',
    list: [
      'Custom HD illustrations and icons tailored to Maxwell’s identity.',
      'Real-time session feedback with non-intrusive updates and micro-animations.',
      'Clean payment flows that are quick, secure, and easy to trust.',
      'Clean payment flows that are quick, secure, and easy to trust.',
    ],
  },

  testing: {
    list: [
      'User testing was crucial. I conducted remote and in-person tests to understand how users responded to real-time data and map interactions. Feedback helped simplify the session overview, enhance visibility of charging status, and optimize the wallet top-up experience.',
      'I also collaborated closely with developers to ensure everything translated smoothly from Figma to functional code—with no surprises at handoff.',
    ],
  },

  outcome: {
    description:
      'Maxwell EV Charging now delivers a seamless, eco-smart experience that:',
    list: [
      'Makes charging effortless and trackable in real time.',
      'Reflects the brand’s values through every visual and interaction.',
      'Scales gracefully to support more features, cities, and charging networks in the future.',
    ],
    footer:
      'This project taught me that great design isn’t just about screens, it’s about solving real problems with clarity, care, and creativity. And that’s what I love most about being a designer.',
  },

  finalShowcase: {
    blocks: [
      {
        keyword: 'Smart, Eco-Conscious Design',
        text: 'Smart, Eco-Conscious Design With a clean interface, natural color palette (greens and blues), and soft visuals, the product reinforces the brand’s commitment to sustainability and innovation.',
      },
      {
        keyword: 'Real-Time Feedback & Notifications',
        text: 'Integrated smart alerts and charging status indicators give users confidence and peace of mind during every session.',
      },
      {
        keyword: 'Scalable UI System',
        text: 'The design system is modular, making it easy to adapt for future features like trip planning, subscription models, or fleet management dashboards.',
      },
      {
        keyword: 'Cross-Device Ready',
        text: 'Cross-Device Ready The final product is fully responsive—designed to work beautifully across mobile phones, tablets, and in-car dashboards.',
      },
    ],
    footer:
      'After weeks of research, iteration, and thoughtful design, the Maxwell EV Charging platform emerged as a sleek, intuitive, and future-forward product built for modern EV drivers. As the lead UI/UX designer, I brought together functionality and visual clarity to create an experience that not only looks good, but works effortlessly in real-world situations.',
  },
};
