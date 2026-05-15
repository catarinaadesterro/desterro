import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ArticleMeta, Article } from './types';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'));
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
      const { data } = matter(raw);
      return data as ArticleMeta;
    })
    .filter(a => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  if (!fs.existsSync(ARTICLES_DIR)) return null;
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return { ...(data as ArticleMeta), content };
    }
  }
  return null;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter(a => a.category === category);
}

export function getFeaturedArticle(): ArticleMeta | null {
  const all = getAllArticles();
  return all.find(a => a.featured) ?? all[0] ?? null;
}

export function getCategories(): string[] {
  const all = getAllArticles();
  return [...new Set(all.map(a => a.category))];
}
