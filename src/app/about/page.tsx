import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthors } from "@/hook/api/Author/getAuthor";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
export const revalidate = 30;
export async function generateMetadata(): Promise<Metadata> {
  const desc = `This is our author `;
  return {
    title: `About Page`,
    description: desc,
  };
}
export default async function AboutPage() {
  const authors = await getAuthors();
  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      {/* Hero Header with Creative Background */}
      <div className="relative overflow-hidden rounded-3xl mb-16">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-70"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-70"></div>
        <div className="relative z-10 px-8 py-16">
          <h1 className="text-5xl font-bold mb-6 text-blue-900">
            About Modern Blog
          </h1>
          <div className="w-24 h-2 bg-blue-500 rounded-full mb-8"></div>
          <p className="text-lg text-blue-800 max-w-2xl">
            We share stories that matter, ideas that inspire, and perspectives
            that broaden horizons.
          </p>
        </div>
      </div>

      {/* Blog History Section with Creative Layout */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-900 inline-block relative">
          Our Story
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-300"></span>
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 border-2 border-blue-200 rounded-lg transform translate-x-4 translate-y-4"></div>
            <Image
              src="/preparation.svg"
              alt="Modern Blog Office"
              width={600}
              height={400}
              className="relative z-10 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground mb-4">
              Modern Blog was founded in 2020 with a simple mission: to create a
              platform for sharing high-quality, informative, and engaging
              content on topics that matter to our readers.
            </p>
            <p className="text-muted-foreground mb-4">
              What began as a small personal blog has grown into a community of
              writers, thinkers, and readers who are passionate about exploring
              ideas and sharing knowledge.
            </p>
            <p className="text-muted-foreground">
              Our team of experienced writers covers a wide range of topics,
              from technology and travel to food and lifestyle, ensuring that
              there's something for everyone at Modern Blog.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section with Creative Cards */}
      <section className="mb-20 relative">
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full opacity-70"></div>
        <h2 className="text-3xl font-bold mb-8 text-blue-900 inline-block relative">
          Mission and Vision
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-300"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl font-bold">M</span>
              </div>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives us forward</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our mission at Modern Blog is to provide high-quality,
                accessible content that informs, inspires, and engages our
                readers. We strive to create a platform where diverse voices can
                share their expertise and perspectives, contributing to
                meaningful conversations on topics that matter.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl font-bold">V</span>
              </div>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>Where we're headed</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We envision Modern Blog as a leading digital publication that
                sets the standard for thoughtful, well-researched content. We
                aim to build a global community of engaged readers who turn to
                us for reliable information, fresh ideas, and compelling
                storytelling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Author Bios Section - Kept as original */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 inline-block relative">
          Meet Our Team
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-300"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <Card key={author.objectId} className="overflow-hidden">
              <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mx-auto">
                <Image
                  src={author.image || "/placeholder.svg"}
                  alt={author.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <CardHeader className="text-center mt-4">
                <CardTitle>{author.name}</CardTitle>
                <CardDescription>{author.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{author.brief}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information Section with Creative Layout */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-blue-900 inline-block relative">
          Get In Touch
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-300"></span>
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 space-y-6">
              <p className="text-muted-foreground">
                Have a question, suggestion, or just want to say hello? We'd
                love to hear from you! Reach out to us using any of the contact
                methods below.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>contactme@myblog.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>+62 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>123 Blog Street, San Francisco, CA 94103</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/contactus.svg"
                alt="Contact Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
