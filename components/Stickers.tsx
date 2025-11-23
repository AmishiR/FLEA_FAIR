"use client";
import React from "react";
import { motion } from "framer-motion";

import food from "@/public/FOOD.png";
import andSign from "@/public/&.png";
import music from "@/public/music.png";
import smallBiz from "@/public/SMALL_BUISNESS.png";
import leftLines from "@/public/left.png";
import rightLines from "@/public/right.png";

export const StickerCluster: React.FC = () => {
  const scaleIn = {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] },
  };

  return (
    <div className="relative w-[300px] h-[350px] md:w-[500px] md:h-[450px]">
      
      {/* Small Business (base) */}
      <motion.img
        src={smallBiz.src}
        className="absolute bottom-[127px] left-[20px] w-[80%] -rotate-3 z-10"
        {...scaleIn}
      />

      {/* FOOD */}
      <motion.img
        src={food.src}
        className="absolute top-[-2px] left-[3px] w-[63%] -rotate-3 z-20"
        {...scaleIn}
        transition={{ delay: 0.1 }}
      />

      {/* & */}
      <motion.img
        src={andSign.src}
        className="absolute top-[25px] left-[245px] w-[22%] -rotate-2 z-40"
        {...scaleIn}
        transition={{ delay: 0.2 }}
      />

      {/* MUSIC */}
      <motion.img
        src={music.src}
        className="absolute top-[100px] left-[120px] w-[62%] -rotate-0 z-30"
        {...scaleIn}
        transition={{ delay: 0.15 }}
      />

      {/* Left lines */}
      <motion.img
        src={leftLines.src}
        className="absolute bottom-[394px] left-[-55px] w-[15%]"
        {...scaleIn}
      />

      {/* Right lines */}
      <motion.img
        src={rightLines.src}
        className="absolute bottom-[135px] right-[12px] w-[15%]"
        {...scaleIn}
      />

    </div>
  );
};
