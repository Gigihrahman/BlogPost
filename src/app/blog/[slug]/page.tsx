import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/hook/api/Post/getPostBySlug";
import { formatDate } from "@/lib/utils";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-10">
      <article className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          {" / "}
          <Link
            href={`/categories/${post.category.slug}`}
            className="hover:text-primary"
          >
            {post.category.name}
          </Link>
          {" / "}
          <span>{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-2">
            {post.category.name}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="text-muted-foreground">
              {formatDate(post.created)}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] w-full mb-8">
            <Image
              src={post.thumbnail || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.substring(2)}
                </h1>
              );
            } else if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                  {paragraph.substring(3)}
                </h2>
              );
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-5 mb-2">
                  {paragraph.substring(4)}
                </h3>
              );
            } else if (paragraph.trim() === "") {
              return <br key={index} />;
            } else {
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        {/* Share Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Share this article</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
          </div>
        </div>

        {/* About the Author */}
        <div className="border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <Image
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h4 className="text-xl font-medium">{post.author.name}</h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
