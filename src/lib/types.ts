export type Block = {
  title?: string;
  keyword?: string;
  text?: string;
  subBlocks?: string[];
};

export type Project = {
  id: number;
  title: string;
  previewTitle: string;
  description: string;
  category: string;
  image: string;
  shortDescription: string;
  subtitle: string;
  categories: { icon: string; label: string }[];

  overview: string[];
  stats: { title: string; description: string }[];

  outcome: {
    description: string;
    features: { bold: string; text: string }[];
  };
};

export type Tool = {
  Icon: string;
  name: string;
};
