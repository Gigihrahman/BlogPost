"use client";

import BlogCard from "@/app/_components/BlogPostCard";
import PaginationSection from "@/components/PaginationSection";
import useGetBlogs from "@/hook/api/blog/useGetBlog";
import React, { useState } from "react";

const LIMIT = 4;
const BlogSection = () => {
  const [page, setPage] = useState<number>(1);
  const { data: blogs, isPending } = useGetBlogs({
    title: "",
    category: "",
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
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

      <PaginationSection
        count={blogs?.count || 0}
        page={page}
        setPage={setPage}
        limit={LIMIT}
      />
    </section>
  );
};

export default BlogSection;
