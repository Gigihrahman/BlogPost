import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4 animate-[fade-in_1s_ease-in-out]">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full animate-pulse">
                Your Daily Dose of Inspiration
              </span>
              <h1 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-5xl xl:text-6xl/none">
                Welcome to <span className="text-blue-600">Modern Blog</span>
              </h1>
              <p className="max-w-[600px] text-blue-700 md:text-xl">
                Explore the latest insights, stories, and ideas on technology,
                travel, food, and lifestyle.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/blog">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Explore Articles
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-[bounce_6s_ease-in-out_infinite]">
            <div className="bg-blue-500 rounded-xl absolute inset-0 rotate-3 -z-10"></div>
            <Image
              src="/homeimage.svg"
              width={550}
              height={550}
              alt="Hero Image"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover bg-white p-2 shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
