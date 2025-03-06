import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { getAuthors } from "@/hook/api/Author/getAuthor";

export default async function AboutPage() {
  const authors = await getAuthors();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-10">About Modern Blog</h1>

      {/* Blog History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
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
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Modern Blog Office"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
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
          <Card>
            <CardHeader>
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

      {/* Author Bios Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
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
                <CardDescription>Content Creator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{author.brief}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you! Reach out to us using any of the contact methods
              below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>contact@modernblog.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>123 Blog Street, San Francisco, CA 94103</span>
              </div>
            </div>
            <div className="pt-4">
              <Button>Send Us a Message</Button>
            </div>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Contact Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
