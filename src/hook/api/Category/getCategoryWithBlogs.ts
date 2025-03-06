import type { CategoryWithBlogs } from "@/types/CategoryWithBlogs";

export const getCategoryWithBlogs = async () => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/category?loadRelations=blogs&relationsPageSize=2`
  );

  const categoryWithBlogs: CategoryWithBlogs[] = await response.json();

  return categoryWithBlogs;
};
