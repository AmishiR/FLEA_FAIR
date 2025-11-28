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

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative">
      <Marquee />
      <Navbar />

      
      <main className="flex-grow relative flex flex-col items-start justify-start pt-10 pb-20">
        <FleaFairLogo />

        <div className="w-full mt-10 relative z-20">
          <HeroSection />
        </div>

        
        <div className="absolute bottom-70 left-30">
          <StickerCluster />
        </div>
      </main>


      {/* second*/}
      <div className="min-h-screen bg-[#F8F7F5] font-sans pb-20 mt-32">

        {/* Dotted line */}
        <div className="pt-8 px-10 max-w-10xl mx-auto">
          <div className="border-t-4 border-dotted border-pink-400 opacity-60 w-full mb-8"></div>
        </div>

       
        <Sponsors />

       
        <div className="px-10 max-w-10xl mx-auto">
          <Dot />
        </div>

       
        <main className="max-w-10xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 mt-12">

         
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8 h-fit">
            <InfoSection />
          </div>

        
          <div className="w-full lg:w-2/3">
            <GridSection />
          </div>

        </main>
      </div>
    </div>
  );
}
