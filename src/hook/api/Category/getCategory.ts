import type { Category } from "@/types/Category";

export const getCategories = async () => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/category`
  );

  const category: Category[] = await response.json();

  return category;
};
