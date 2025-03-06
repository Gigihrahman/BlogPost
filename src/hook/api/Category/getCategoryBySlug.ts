import { axiosInstance } from "@/lib/axios";
import type { CategoryWithBlogs } from "@/types/CategoryWithBlogs";

export const getCategoryBySlug = async (slug: string) => {
  const { data } = await axiosInstance.get<CategoryWithBlogs[]>(
    `/data/category?where=%60slug%60%20%3D%20'${slug}'&loadRelations=blogs%2Cblogs.author`
  );

  return data[0];
};
