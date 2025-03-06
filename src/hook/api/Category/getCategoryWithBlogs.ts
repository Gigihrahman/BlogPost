import { axiosInstance } from "@/lib/axios";
import type { CategoryWithBlogs } from "@/types/CategoryWithBlogs";

export const getCategoryWithBlogs = async () => {
  const { data } = await axiosInstance.get<CategoryWithBlogs[]>(
    `/data/category?loadRelations=blogs&relationsPageSize=2`
  );

  return data;
};
