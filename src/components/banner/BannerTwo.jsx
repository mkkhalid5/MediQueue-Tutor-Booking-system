'use client';

import { Button } from "@heroui/react";

const BannerTwo = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400')] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex min-h-137 items-center px-10">
        
        <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-300">
            Online Learning
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-white">
            Upgrade Your Skills With Live Classes
          </h1>

          <p className="mb-8 text-lg text-gray-200">
            Connect with experienced tutors and learn anytime from anywhere.
          </p>

          <div className="flex gap-4">
            <Button color="primary" size="lg">
              Start Learning
            </Button>

            <Button variant="bordered" className="border-white text-white" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;