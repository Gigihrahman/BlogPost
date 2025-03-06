import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Featured Post - Left Side */}
      <div className="md:col-span-2 relative overflow-hidden rounded-lg h-[400px]">
        {/* <Link href="/blog/kitten-care"> */}
        <div className="relative h-full w-full">
          <Image
            src="/next.svg"
            alt="Person with pink hair in a forest"
            layout="fill"
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <span className="bg-white text-black px-3 py-1 text-sm font-medium mb-3 w-fit backdrop-blur-sm bg-opacity-40 rounded-md">
              News
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 backdrop-blur-sm bg-opacity-40 rounded-md p-2">
              10 steps to prepare your home for a Kitten-about Kitten Care
            </h2>
            <p className="text-sm backdrop-blur-sm bg-opacity-40 rounded-md p-2">
              August 01, 2016
            </p>
          </div>
        </div>
        {/* </Link> */}
      </div>

      {/* Right Side Posts */}
      <div className="flex flex-col gap-4">
        {/* Top Right Post */}
        <div className="relative overflow-hidden rounded-lg h-[190px]">
          {/* <Link href="/blog/smartphones-2016"> */}
          <div className="relative h-full w-full">
            <Image
              src="/window.svg"
              alt="Forest path"
              layout="fill"
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span className="bg-white text-black px-3 py-1 text-sm font-medium mb-3 w-fit backdrop-blur-sm bg-opacity-40 rounded-md">
                Travel
              </span>
              <h2 className="text-lg md:text-xl font-bold mb-2 backdrop-blur-sm bg-opacity-40 rounded-md p-2">
                The Best smartphones you can purchase right now in 2016
              </h2>
              <p className="text-sm backdrop-blur-sm bg-opacity-40 rounded-md p-2">
                July 01, 2016
              </p>
            </div>
          </div>
          {/* </Link> */}
        </div>

        {/* Bottom Right Post */}
        <div className="relative overflow-hidden rounded-lg h-[190px]">
          {/* <Link href="/blog/travel-100-places"> */}
          <div className="relative h-full w-full">
            <Image
              src="/file.svg"
              alt="Person in white t-shirt"
              layout="fill"
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span className="bg-white text-black px-3 py-1 text-sm font-medium mb-3 w-fit backdrop-blur-sm bg-opacity-40 rounded-md">
                Fashion
              </span>
              <h2 className="text-lg md:text-xl font-bold mb-2 backdrop-blur-sm bg-opacity-40 rounded-md p-2">
                Catch the travel bug and visit 100 places Before You Die
              </h2>
              <p className="text-sm backdrop-blur-sm bg-opacity-40 rounded-md p-2">
                June 08, 2016
              </p>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
