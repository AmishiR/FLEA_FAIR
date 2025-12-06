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
  const baseTransition = { 
    duration: 0.9, 
    ease: [0.645, 0.045, 0.355, 1] as [number, number, number, number]
  };

  return (
    <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
      
      {/* Small Business (base) */}
      <motion.img
        src={smallBiz.src}
        className="absolute bottom-[100px] sm:bottom-[115px] md:bottom-[127px] left-[15px] sm:left-[18px] md:left-[20px] w-[80%] -rotate-3 z-10"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={baseTransition}
      />

      {/* FOOD */}
      <motion.img
        src={food.src}
        className="absolute top-0 sm:top-[-1px] md:top-[-2px] left-[2px] sm:left-[2.5px] md:left-[3px] w-[63%] -rotate-3 z-20"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...baseTransition, delay: 0.1 }}
      />

      {/* & */}
      <motion.img
        src={andSign.src}
        className="absolute top-[20px] sm:top-[23px] md:top-[25px] left-[190px] sm:left-[220px] md:left-[240px] lg:left-[245px] w-[22%] -rotate-2 z-40"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...baseTransition, delay: 0.2 }}
      />

      {/* MUSIC */}
      <motion.img
        src={music.src}
        className="absolute top-[75px] sm:top-[90px] md:top-[100px] left-[90px] sm:left-[105px] md:left-[120px] w-[62%] -rotate-0 z-30"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...baseTransition, delay: 0.15 }}
      />

      {/* Left lines */}
      <motion.img
        src={leftLines.src}
        className="absolute bottom-[300px] sm:bottom-[350px] md:bottom-[380px] lg:bottom-[394px] left-[-45px] sm:left-[-50px] md:left-[-55px] w-[15%]"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={baseTransition}
      />

      {/* Right lines */}
      <motion.img
        src={rightLines.src}
        className="absolute bottom-[100px] sm:bottom-[120px] md:bottom-[135px] right-[10px] sm:right-[11px] md:right-[12px] w-[15%]"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={baseTransition}
      />

    </div>
  );
};