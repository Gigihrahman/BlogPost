import { axiosInstance } from "@/lib/axios";
import type { CategoryWithBlogs } from "@/types/CategoryWithBlogs";
import { useQuery } from "@tanstack/react-query";

interface GetBlogsQuery {
  limit: number;
  offset: number;
  category: string;
}

// Make sure this is called inside a React component or custom hook
const useGetCategories = (queries: GetBlogsQuery) => {
  return useQuery({
    queryKey: ["category", queries],
    queryFn: async () => {
      const { category, limit, offset } = queries;
      let baseUrl = `/data/category?pageSize=${limit}&offset=${offset}&where=%60slug%60%20%3D%20'${category}'&sortBy=%60created%60%20desc&loadRelations=blogs%2Cblogs.author`;
      let baseUrlCount = `/data/category/count?pageSize=${limit}&offset=${offset}&where=%60slug%60%20%3D%20'${category}'&sortBy=%60created%60%20desc&loadRelations=blogs%2Cblogs.author`;

      const { data: categories } = await axiosInstance.get<CategoryWithBlogs[]>(
        baseUrl
      );
      const { data: count } = await axiosInstance.get<number>(baseUrlCount);

      return { data: categories, count };
    },
  });
};

export default useGetCategories;
