import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-end gap-10 mt-20 relative px-2">

      

      {/* Hero image 2 — unchanged */}
      <div className="relative transform -translate-x-50 translate-y-20 z-10">
        <Image
          src="/hero2.png"
          alt="Hero Image 2"
          width={500}
          height={500}
          className="rounded-3xl object-cover"
        />
      </div>

      {/* Hero image 1 — unchanged */}
      <div className="relative transform -translate-x-20 translate-y-0 z-10">
        <Image
          src="/hero1.png"
          alt="Hero Image 1"
          width={569}
          height={569}
          className="rounded-3xl object-cover"
        />
      </div>

    </section>
  );
};
