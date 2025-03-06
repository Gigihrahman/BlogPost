import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { formatDate } from "@/lib/utils";
import { getPosts } from "@/hook/api/Post/getPost";

import { getCategories } from "@/hook/api/Category/getCategory";

export default async function BlogPage() {
  const blogs = await getPosts();
  const categories = await getCategories();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {/* Search bar */}
          <div className="mb-8">
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full max-w-lg"
            />
          </div>

          {/* Posts grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog) => (
              <Card key={blog.objectId} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.thumbnail || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 p-6">
                  <div className="flex justify-between">
                    <Badge variant="secondary">{blog.category.name}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(blog.created)}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </CardTitle>
                  <p className="line-clamp-3 text-muted-foreground">
                    {blog.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center p-6 pt-0">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog.author.image || "/placeholder.svg"}
                      alt={blog.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm">{blog.author.name}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          {/* Categories */}
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.objectId}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest articles.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email" required />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
