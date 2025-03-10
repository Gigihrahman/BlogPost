import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/types/Blogs";

interface FeaturedPostsProps {
  posts: Blog[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  if (!posts || posts.length < 3) {
    return null; // Don't render if we don't have enough posts
  }

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <section aria-labelledby="featured-posts-heading" className="py-8">
      <h2 id="featured-posts-heading" className="text-2xl font-bold mb-4">
        Popular Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Featured Post - Left Side */}
        <div className="md:col-span-2 relative overflow-hidden rounded-lg h-[400px] group transition-all duration-300 shadow-md hover:shadow-xl">
          <Link
            href={`/blog/${mainPost.slug}`}
            className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 rounded-lg"
            aria-labelledby="main-post-title"
          >
            <div className="relative h-full w-full">
              <Image
                src={mainPost.thumbnail}
                alt={mainPost.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                <span className="bg-white/80 text-black px-3 py-1 text-sm font-medium mb-3 w-fit rounded-md">
                  {mainPost.category.name || "Featured"}
                </span>
                <h3
                  id="main-post-title"
                  className="text-2xl md:text-3xl font-bold mb-2 text-shadow"
                >
                  {mainPost.title}
                </h3>
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm">{mainPost.author?.name}</span>
                  <time dateTime={mainPost.created} className="text-sm">
                    {mainPost.created}
                  </time>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Side Posts */}
        <div className="flex flex-col gap-4 md:gap-6">
          {sidePosts.map((post, index) => (
            <div
              key={post.objectId}
              className="relative overflow-hidden rounded-lg h-[190px] group transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 rounded-lg"
                aria-labelledby={`side-post-title-${index}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <span className="bg-white/80 text-black px-3 py-1 text-sm font-medium mb-3 w-fit rounded-md">
                      {post.category.name || "Featured"}
                    </span>
                    <h3
                      id={`side-post-title-${index}`}
                      className="text-lg md:text-xl font-bold mb-2 text-shadow"
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm">{post.author?.name}</span>
                      <time dateTime={post.created} className="text-sm">
                        {post.created}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
