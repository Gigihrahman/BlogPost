import { axiosInstance } from "@/lib/axios";
import type { Author } from "@/types/Author";

export const getAuthors = async () => {
  const { data } = await axiosInstance.get<Author[]>("/data/author");

  return data;
};
