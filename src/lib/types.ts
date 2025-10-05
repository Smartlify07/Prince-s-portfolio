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
  mockupImages?: {
    sm: string;
    lg: string;
  };
  outcomeImages?: {
    sm: {
      src: string;
      fullWidth: boolean;
      height?: string;
      afterFont?: boolean;
    }[];
    lg: {
      src: string;
      fullWidth: boolean;
      height?: string;
      afterFont?: boolean;
    }[];
  };
  designChoiceImages?: {
    sm: {
      font: string;
      colors: string;
    };
    lg: {
      font: string;
      colors: string;
    };
  };
  timeLineImage?: {
    sm: string;
    lg: string;
  };
};

export type Tool = {
  Icon: string;
  name: string;
};
