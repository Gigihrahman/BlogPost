import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { formatDate } from "@/lib/utils";
import { getCategoryBySlug } from "@/hook/api/Category/getCategoryBySlug";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const category = await getCategoryBySlug(slug);

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {category?.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.blogs.map((blog) => (
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
                <Badge variant="secondary">{category.name}</Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(blog.created)}
                </span>
              </div>
              <CardTitle className="line-clamp-2">
                <Link
                  href={`/blog/${blog.objectId}`}
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

      {category.blogs.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">
            No posts found in this category
          </h2>
          <p className="text-muted-foreground mb-6">
            Check back later for new content or explore other categories.
          </p>
          <Link
            href="/categories"
            className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Browse All Categories
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
