import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blogs";
import { notFound } from "next/navigation";

export const getPostBySlug = async (slug: string) => {
  const { data } = await axiosInstance.get(
    `/data/blog?where=%60slug%60%20%3D%20'${slug}'&loadRelations=author%2Ccategory`
  );

  if (!data.length) {
    return notFound();
  }

  return data[0];
};
