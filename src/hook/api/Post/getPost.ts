import type { Blog } from "@/types/Blogs";
import { notFound } from "next/navigation";

export const getPosts = async () => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/blog?loadRelations=author%2Ccategory`
  );

  const blogs: Blog[] = await response.json();

  if (!blogs.length) {
    return notFound();
  }

  return blogs;
};
