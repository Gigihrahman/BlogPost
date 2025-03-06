import { Blog } from "@/types/Blogs";

export interface CategoryWithBlogs {
  objectId: string;
  name: string;
  description: string;
  slug: string;
  blogs: Blog[];
}
