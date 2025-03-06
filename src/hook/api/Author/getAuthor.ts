import type { Author } from "@/types/Author";
import type { Category } from "@/types/Category";

export const getAuthors = async () => {
  const response = await fetch(
    `https://joysomecream-us.backendless.app/api/data/author`
  );

  const authors: Author[] = await response.json();

  return authors;
};
