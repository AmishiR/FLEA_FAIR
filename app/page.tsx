import React from 'react';
import { Navbar } from '../components/Navbar';
import { Marquee } from '../components/Marquee';
import { FleaFairLogo } from '../components/FleaFairLogo';
import { StickerCluster } from '../components/Stickers';
import { HeroSection } from '../components/HeroSection';

import Sponsors from '../components/Sponsors';
import Dot from '../components/Dot';
import InfoSection from '../components/InfoSection';
import GridSection from '../components/GridSection';

import FoundersNote from '../components/FoundersNote';

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative overflow-x-hidden">
      <Marquee />
      <Navbar />

      <main className="flex-grow relative flex flex-col items-start justify-start pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
        <FleaFairLogo />

        {/* Sticker Cluster - positioned above hero on small/medium screens */}
        <div className="relative w-full mt-5 sm:mt-50 md:mt-8 z-30 md:absolute md:bottom-[250px] md:left-[80px]">
          <StickerCluster />
        </div>

        {/* Hero Section - below sticker on small/medium screens */}
        <div
  className="
    w-full mt-6 sm:mt-8 md:mt-10 relative z-20
    flex justify-center items-center
    lg:block lg:justify-start lg:items-start
  "
>
  <HeroSection />
</div>
      </main>

      {/* Second Section */}
      <div className="min-h-screen bg-[#F8F7F5] font-sans pb-12 sm:pb-16 md:pb-20 mt-16 sm:mt-24 md:mt-32">

        {/* Dotted line */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-10xl mx-auto">
          <Dot />
        </div>

        <Sponsors />

        {/* Dotted line */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-10xl mx-auto">
          <Dot />
        </div>

        {/* Info and Grid Section */}
        <main className="max-w-10xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 mt-8 sm:mt-10 md:mt-12">

          {/* Info Section - Sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8 h-fit">
            <InfoSection />
          </div>

          {/* Grid Section - Main Content */}
          <div className="w-full lg:w-2/3">
            <GridSection />
          </div>

        </main>


        <main
  className="
    w-full flex justify-center
    mt-8        /* mobile */
    sm:mt-12    /* small screens */
    md:mt-20    /* tablets */
    lg:mt-28    /* desktops */
    xl:mt-32    /* large desktops */
  "
>
  <div className="w-full max-w-[2000px] ml-auto pr-0 pl-40 sm:pr-20 md:pr-32">

  <FoundersNote
    title="FOUNDER’S NOTE"
    note={`The Flea Fair started with one simple goal - to support small businesses and give them the platform they deserve. Today, as our community grows stronger with every edition, our vision is clear: to expand The Flea Fair to more cities and create opportunities for thousands of homegrown entrepreneurs across India.
Thank you for being part of this journey.`}
    name="ANKUR PACHISIA"
    imageSrc="/founder-ankur.png"
    linkedinUrl="https://www.linkedin.com/"
  />


  </div>
</main>
      </div>
    </div>
  );
}