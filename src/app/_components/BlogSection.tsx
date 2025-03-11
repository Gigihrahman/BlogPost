"use client";

import BlogCard from "@/app/_components/BlogPostCard";
import useGetBlogs from "@/hook/api/blog/useGetBlog";

const LIMIT = 3;
const BlogSection = () => {
  const { data: blogs, isPending } = useGetBlogs({
    title: "",
    category: "",
    limit: LIMIT,
    offset: 0,
  });
  return (
    <section>
      <div className="py-4">
        <h2 className="text-3xl font-bold mb-6">From the blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs?.data.map((post) => (
            <BlogCard key={post.objectId} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
