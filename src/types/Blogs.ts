import type { Author } from "@/types/Author";
import type { Category } from "@/types/Category";

export type Blog = {
  objectId: string;
  title: string;
  description: string;
  content: string;
  created: string;
  author: Author;
  category: Category;
  thumbnail: string;
  slug: string;
};
