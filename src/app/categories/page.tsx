import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCategoryWithBlogs } from "@/hook/api/Category/getCategoryWithBlogs";
import type { Metadata } from "next";
import Link from "next/link";
export const revalidate = 30;
export async function generateMetadata(): Promise<Metadata> {
  const desc = `Read Our blog select from categories `;
  return {
    title: `Categories Page`,
    description: desc,
  };
}

export default async function CategoriesPage() {
  const categories = await getCategoryWithBlogs();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Categories</h1>
      <p className="text-muted-foreground mb-10 max-w-3xl">
        Browse our content by category to find the information that matters most
        to you. We cover a wide range of topics to keep you informed and
        entertained.
      </p>

      <div className="grid m-4 md:m-0 gap-8 md:grid-cols-2">
        {categories.map((category) => {
          // Mengambil data blogs yang ada di dalam category
          const categoryPosts = category.blogs;

          return (
            <Card key={category.objectId} className="overflow-hidden">
              <CardHeader className="bg-muted py-4">
                <CardTitle className="text-2xl">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="hover:underline"
                  >
                    {category.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {/* Looping untuk setiap blog dalam category */}
                  {categoryPosts.slice(0, 3).map((post) => (
                    <li key={post.objectId}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Menampilkan link "View all posts" jika ada lebih dari 3 posts */}
                {categoryPosts.length > 3 && (
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    View all {categoryPosts.length} posts →
                  </Link>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
