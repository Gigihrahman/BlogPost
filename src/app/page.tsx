import Hero from "@/app/_components/Hero";
import { getPostsPopular } from "@/app/_api/getPopular";
import BlogSection from "@/app/_components/BlogSection";
import Jumbotron from "@/app/_components/Jumbotron";
import { NextPage, type Metadata } from "next";
export const revalidate = 30;
export async function generateMetadata(): Promise<Metadata> {
  const desc = `Read Our blog `;
  return {
    title: `Home Page`,
    description: desc,
  };
}
const Home: NextPage = async () => {
  const popular = await getPostsPopular();
  return (
    <main className="container mx-auto px-4 py-8">
      <Jumbotron />
      <Hero posts={popular} />

      <BlogSection />
    </main>
  );
};

export default Home;
