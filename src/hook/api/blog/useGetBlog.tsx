import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blogs";
import { useQuery } from "@tanstack/react-query";

interface GetBlogsQuery {
  title: string;
  limit: number;
  offset: number;
  category?: string;
}
const useGetBlogs = (queries: GetBlogsQuery) => {
  return useQuery({
    queryKey: ["blogs", queries],
    queryFn: async () => {
      const { title, category, limit, offset } = queries;

      let baseUrl = `/data/blog?sortBy=%60created%60%20desc&pageSize=${limit}&offset=${offset}&where=%60title%60%20LIKE%20'%25${title}%25'&loadRelations=author%2Ccategory `;
      let baseUrlCount = `/data/blog/count?where=%60title%60%20LIKE%20'%25${title}%25'`;
      if (category && category !== "all") {
        baseUrl = `/data/blog?pageSize=${limit}&offset=${offset}&where=%60title%60%20LIKE%20'%25${title}%25'%20AND%20%60category%60.%60name%60%20%3D%20'${category}'&sortBy=%60created%60%20desc&loadRelations=author%2Ccategory`;
        baseUrlCount = `/data/blog/count?pageSize=${limit}&offset=${offset}&where=%60title%60%20LIKE%20'%25${title}%25'%20AND%20%60category%60.%60name%60%20%3D%20'${category}'&sortBy=%60created%60%20desc&loadRelations=author%2Ccategory`;
        console.log(baseUrl);
        console.log(baseUrlCount);
      }

      const { data: blogs } = await axiosInstance.get<Blog[]>(baseUrl);
      const { data: count } = await axiosInstance.get<number>(baseUrlCount);

      return { data: blogs, count };
    },
  });
};

export default useGetBlogs;
