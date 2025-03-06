import type { CategoryWithBlogs } from "@/types/CategoryWithBlogs";

export const getCategoryBySlug = async (slug: string) => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/category?where=%60slug%60%20%3D%20'${slug}'&loadRelations=blogs%2Cblogs.author`
  );

  const category: CategoryWithBlogs[] = await response.json();

  return category[0];
};
