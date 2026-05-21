'use client';

import { Button } from "@heroui/react";
import Link from "next/link";

const BannerThree = () => {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl md:rounded-3xl
        bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400')]
        bg-cover bg-center
      "
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div
        className="
          relative z-10
          flex items-center
          min-h-125 sm:min-h-150 md:min-h-162
          px-4 sm:px-6 md:px-10
          py-10
        "
      >
        <div
          className="
            w-full max-w-xl md:max-w-2xl
            rounded-2xl md:rounded-3xl
            border border-white/20
            bg-white/10
            p-5 sm:p-7 md:p-10
            backdrop-blur-xl
          "
        >
          <p
            className="
              mb-3
              text-xs sm:text-sm
              font-semibold
              uppercase
              tracking-[3px]
              text-cyan-300
            "
          >
            CAREER GROWTH
          </p>

          <h1
            className="
              mb-4 md:mb-6
              text-3xl sm:text-4xl md:text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            Build Your Future With Smart Learning
          </h1>

          <p
            className="
              mb-6 md:mb-8
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-gray-200
            "
          >
            Discover practical courses that help you grow faster in your career journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tutors">
              <Button color="primary" size="lg">
              Explore Courses
            </Button>
            </Link>

            <Link href="/tutors"><Button
              variant="bordered"
              className="border-white text-white"
              size="lg"
            >
              Free Trial
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;