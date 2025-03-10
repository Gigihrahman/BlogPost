import BlogCategory from "@/app/categories/[slug]/_components/BlogCategory";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const desc = `Browse all posts in the ${slug} category`;
  return {
    title: `${slug} Category`,
    description: desc,
  };
}
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <div className="container mx-auto py-10">
      <BlogCategory slug={slug} />
    </div>
  );
};

export default CategoryPage;
