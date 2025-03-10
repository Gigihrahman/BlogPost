"use client";
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
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import useGetBlogs from "@/hook/api/blog/useGetBlog";
import PaginationSection from "@/components/PaginationSection";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/hook/api/Category/getCategory";
import type { Category } from "@/types/Category";

const LIMIT = 4;

export default function BlogPage() {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [debounceValue] = useDebounceValue(search, 700);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);

  // Use the hook to handle async data fetching
  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category,
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  });

  // Add handlers for search input with proper typing
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (categoryId: string) => {
    setCategory(categoryId === "all" ? "" : categoryId);
    setPage(1); // Reset to first page when changing category
  };

  // Fetch categories data on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Get category name function
  const getCategoryName = (categoryId: string): string => {
    if (categoryId === "" || categoryId === "all") return "All Posts";

    const foundCategory = categories.find((cat) => cat.slug === categoryId);
    return foundCategory?.name || "Unknown Category";
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>

      {/* Search bar */}
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search articles..."
          className="w-full md:max-w-md"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="sticky top-6 bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {/* All Posts button */}
              <Button
                key="all"
                variant={category === "" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleCategoryClick("all")}
              >
                All Posts
                <Badge className="ml-auto">{blogs?.count || 0}</Badge>
              </Button>

              {/* Dynamic category buttons */}
              {isLoadingCategories ? (
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Loading categories...
                </div>
              ) : (
                categories.map((cat) => (
                  <Button
                    key={cat.slug}
                    variant={category === cat.slug ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryClick(cat.slug)}
                  >
                    {cat.name}
                    {/* You could add category count badges here if available */}
                  </Button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          {/* Category title */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              {getCategoryName(category)}
            </h2>
            {blogs?.count ? (
              <p className="text-muted-foreground">
                Showing {Math.min(blogs.data.length, LIMIT)} of {blogs.count}{" "}
                posts
              </p>
            ) : null}
          </div>

          {/* Posts grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {isPending ? (
              <div className="col-span-2 h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Loading blogs...</p>
              </div>
            ) : blogs?.data && blogs.data.length > 0 ? (
              blogs.data.map((blog) => (
                <Card
                  key={blog.objectId}
                  className="flex flex-col h-full hover:shadow-md transition-shadow"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={blog.thumbnail || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-2 p-6">
                    <div className="flex justify-between">
                      <Badge
                        variant="secondary"
                        className="hover:bg-secondary/80"
                      >
                        {blog.category?.name || "Uncategorized"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(blog.created)}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {blog.title}
                      </Link>
                    </CardTitle>
                    <p className="line-clamp-3 text-muted-foreground">
                      {blog.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center p-6 pt-0 border-t">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={blog.author?.image || "/placeholder.svg"}
                          alt={blog.author?.name || "Author"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {blog.author?.name || "Unknown Author"}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-2 bg-muted/20 rounded-lg p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No blogs found matching your criteria
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearch("");
                    setCategory("");
                    setPage(1);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            <PaginationSection
              count={blogs?.count || 0}
              page={page}
              setPage={setPage}
              limit={LIMIT}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
