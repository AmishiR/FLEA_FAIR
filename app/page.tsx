import React from 'react';
import { Navbar } from '../components/Navbar';
import { Marquee } from '../components/Marquee';
import { FleaFairLogo } from '../components/FleaFairLogo';
import { StickerCluster } from '../components/Stickers';

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F7F5] text-slate-900 font-sans selection:bg-brand-pink selection:text-white relative">
      <Marquee />
      <Navbar />

      <main className="flex-grow relative flex flex-col items-start justify-start pt-10 pb-20">
        <FleaFairLogo />

        {/* Bottom‑left sticker cluster */}
        <div className="absolute bottom-40 left-30">
          <StickerCluster />
        </div>
      </main>
    </div>
  );
}
