import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-20 relative px-4 sm:px-6 md:px-2">

      {/* Hero image 2 */}
      <div className="relative transform md:-translate-x-50 md:translate-y-20 translate-x-0 translate-y-0 z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
        <Image
          src="/hero2.png"
          alt="Hero Image 2"
          width={500}
          height={500}
          className="rounded-2xl md:rounded-3xl object-cover w-full h-auto"
        />
      </div>

      {/* Hero image 1 */}
      <div className="relative transform md:-translate-x-20 md:translate-y-0 translate-x-0 -translate-y-4 sm:-translate-y-6 z-20 w-full max-w-[320px] sm:max-w-[450px] md:max-w-[569px]">
        <Image
          src="/hero1.png"
          alt="Hero Image 1"
          width={569}
          height={569}
          className="rounded-2xl md:rounded-3xl object-cover w-full h-auto"
        />
      </div>

    </section>
  );
};