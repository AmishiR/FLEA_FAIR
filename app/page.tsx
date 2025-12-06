import React from 'react';
import { Navbar } from '../components/Navbar';
import { Marquee } from '../components/Marquee';
import { FleaFairLogo } from '../components/FleaFairLogo';
import { StickerCluster } from '../components/Stickers';
import { HeroSection } from '../components/HeroSection';
import QuickLinksFooter from '@/components/footer';

import Sponsors from '../components/Sponsors';
import Dot from '../components/Dot';
import InfoSection from '../components/InfoSection';
import GridSection from '../components/GridSection';

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative">
      <Marquee />
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex flex-col items-start justify-start pt-6 sm:pt-10  sm:pb-16 md:pb-20 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-visible min-h-[600px] lg:min-h-[700px]">
        <FleaFairLogo />

        {/* Container for hero and stickers */}
        <div className="w-full mt-6 sm:mt-8 md:mt-10 relative">
          {/* Stickers - positioned on the left, overlapping with hero */}
          <div className="hidden lg:block absolute top-20 left-0 xl:left-10 z-30">
            <StickerCluster />
          </div>

          {/* Hero images */}
          <div className="relative z-20">
            <HeroSection />
          </div>

          {/* Mobile stickers - below hero on small screens */}
          <div className="block lg:hidden mt-8 flex justify-center">
            <StickerCluster />
          </div>
        </div>
      </main>

      {/* Second Section */}
      <div className="min-h-screen bg-[#F8F7F5] font-sans pb-12 sm:pb-16 md:pb-20 mt-12 sm:mt-20 md:mt-32">

        {/* Dotted line */}
        
        <div className="pt-4 sm:pt-6 md:pt-8  sm:px-6 md:px-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl  font-black text-brand-purple uppercase tracking-tighter mb-15"> 
            The Flea Fair Sponors 
         </h2>
          <div className="border-t-2 sm:border-t-4 border-dotted border-pink-400 opacity-60 w-full mb-6 sm:mb-8"></div>
        </div>

        {/* Sponsors */}
        <Sponsors />
          
        {/* Dot separator */}
        <div className="px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          
          <Dot />
        </div>

        {/* Main content grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 mt-8 sm:mt-10 md:mt-12">

          {/* Info Section - sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8 h-fit">
            <InfoSection />
          </div>

          {/* Grid Section - main content */}
          <div className="w-full lg:w-2/3">
            <GridSection />
          </div>

        </main>
      </div>

      {/* Footer */}
      <div>
        <QuickLinksFooter />
      </div>
    </div>
  );
}