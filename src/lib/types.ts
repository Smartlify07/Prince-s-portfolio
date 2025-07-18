export type Block = {
  title?: string;
  keyword?: string;
  text?: string;
  subBlocks?: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image: string;

  goals: {
    description: string;
    goalBlocks: Block[];
    footer: string;
  };
  challenge: {
    description: string;
    blocks: { title: string; subBlocks: string[] }[];
  };

  approach: {
    title: string;
    subtitle: string;
    content: string;
  };

  brainstorm: {
    description: string;
    content: { title: string; description?: string; blocks: Block[] }[];
  };
  highlights: {
    description: string;
    list: string[];
  };
  testing: {
    list: string[];
  };
  outcome: {
    description: string;
    list: string[];
    footer: string;
  };
  finalShowcase: {
    footer: string;
    blocks: Block[];
  };
};

export type Tool = {
  Icon: string;
  name: string;
};
