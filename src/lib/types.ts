export interface ArticleMeta {
  title: string;
  subtitle: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  featured?: boolean;
  published: boolean;
  coverImage?: string;
  coverAlt?: string;
  coverCaption?: string;
  topics?: string;
  tese?: string;
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface Article extends ArticleMeta {
  content: string;
}
