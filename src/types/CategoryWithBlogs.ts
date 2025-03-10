import type { Author } from "@/types/Author";
import { Blog } from "@/types/Blogs";

export interface CategoryWithBlogs {
  objectId: string;
  name: string;
  description: string;
  slug: string;
  blogs: Blog[];
  views: number;
  author: Author;
}
