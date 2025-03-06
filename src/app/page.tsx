import BlogCard, { BlogCardProps } from "@/app/_components/BlogPostCard";
import Hero from "@/app/_components/Hero";
import { getPosts } from "@/hook/api/Post/getPost";
import { NextPage } from "next";

const Home: NextPage = async () => {
  const blogPosts = await getPosts();
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />

      <div className="py-4">
        <h2 className="text-3xl font-bold mb-6">From the blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.objectId} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
