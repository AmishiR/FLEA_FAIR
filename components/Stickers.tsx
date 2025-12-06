"use client";
import React from "react";
import { motion } from "framer-motion";

export const StickerCluster: React.FC = () => {
  const scaleIn = {
    initial: { scale: 0.65, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  };

  return (
    <div className="w-full flex justify-start items-center p-8 overflow-hidden -translate-x-20 md:-translate-x-4">
      
      {/* 
         ADDED: -translate-x-8 md:-translate-x-16 
         This shifts the whole cluster left. Increase the number (e.g., 20, 24) to move it further.
      */}
      <div className="relative w-full max-w-[520px] aspect-[1.1/1] -translate-x-20 md:-translate-x-4">
        
        <motion.img
          src="/SMALL_BUISNESS.png"
          alt="Small Business"
          className="absolute bottom-[28%] left-[10%] w-[78%] -rotate-[2deg] z-10"
          {...scaleIn}
        />

        <motion.img
          src="/FOOD.png"
          alt="Food"
          className="absolute top-[2%] left-[4%] w-[62%] -rotate-[6deg] z-20"
          {...scaleIn}
          transition={{ delay: 0.1 }}
        />

        <motion.img
          src="/&.png"
          alt="And"
          className="absolute top-[11%] left-[49%] w-[20%] rotate-[4deg] z-40"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        />

        <motion.img
          src="/music.png"
          alt="Music"
          className="absolute top-[23%] left-[27%] w-[63%] rotate-[-2deg] z-10"
          {...scaleIn}
          transition={{ delay: 0.15 }}
        />

        <motion.img
          src="/left.png"
          alt="Left decoration"
          className="absolute top-[4%] left-[-10%] w-[16%] -rotate-[8deg] z-0"
          {...scaleIn}
          transition={{ delay: 0.25 }}
        />

        <motion.img
          src="/right.png"
          alt="Right decoration"
          className="absolute bottom-[30%] right-[-3%] w-[15%] rotate-[8deg] z-0"
          {...scaleIn}
          transition={{ delay: 0.3 }}
        />
      </div>
    </div>
  );
};