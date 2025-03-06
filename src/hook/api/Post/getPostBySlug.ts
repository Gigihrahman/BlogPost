import type { Blog } from "@/types/Blogs";
import { notFound } from "next/navigation";

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/blog?where=%60slug%60%20%3D%20'${slug}'&loadRelations=author%2Ccategory`
  );

  const blog: Blog[] = await response.json();

  if (!blog.length) {
    return notFound();
  }

  return blog[0];
};
