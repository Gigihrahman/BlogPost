import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blogs";
import { notFound } from "next/navigation";

export const getPosts = async () => {
  const { data } = await axiosInstance.get<Blog[]>(
    "/data/blog?loadRelations=author%2Ccategory"
  );

  if (!data.length) {
    return notFound();
  }

  return data;
};
