import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blogs";
import { notFound } from "next/navigation";

export const getPostsPopular = async () => {
  const { data } = await axiosInstance.get<Blog[]>(
    "/data/blog?pageSize=3&sortBy=%60views%60%20desc&loadRelations=author%2Ccategory"
  );

  if (!data.length) {
    return notFound();
  }

  return data;
};
