import { axiosInstance } from "@/lib/axios";
import type { Category } from "@/types/Category";

export const getCategories = async () => {
  const { data } = await axiosInstance.get<Category[]>("/data/category");

  return data;
};
