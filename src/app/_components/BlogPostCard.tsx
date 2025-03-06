// components/BlogCard.tsx
import type { Blog } from "@/types/Blogs";
import Image from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  post: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col">
      {/* Gambar penuh dan responsif */}
      <div className="relative m-4 w-full h-64 sm:h-80 md:aspect-auto">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          objectFit="contain"
          objectPosition="70%"
        />
      </div>
      {/* Konten dengan flex untuk memastikan footer selalu di bawah */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 text-base mb-4">{post.description}</p>
        {/* Footer: diletakkan di paling bawah dengan mt-auto */}
        <div className="mt-auto flex justify-between items-center text-sm text-gray-500">
          <span>{post.author.name}</span>
          <span>{post.created}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
