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
    <div
      className="
        relative
        w-[260px] h-[260px]
        sm:w-[330px] sm:h-[330px]
        md:w-[420px] md:h-[390px]
        lg:w-[480px] lg:h-[440px]
        xl:w-[520px] xl:h-[480px]
      "
    >

      {/* SMALL BUSINESS — Base Layer */}
      <motion.img
        src="/SMALL_BUISNESS.png"
        alt="Small Business"
        className="
          absolute
          bottom-[22%] left-[10%]
          w-[78%]
          -rotate-[2deg]
          z-10
        "
        {...scaleIn}
      />

      {/* FOOD */}
      <motion.img
        src="/FOOD.png"
        alt="Food"
        className="
          absolute
          top-[2%] left-[4%]
          w-[62%]
          -rotate-[6deg]
          z-20
        "
        {...scaleIn}
        transition={{ delay: 0.1 }}
      />

      {/* & */}
      <motion.img
        src="/&.png"
        alt="And"
        className="
          absolute
          top-[14%] left-[62%]
          w-[20%]
          rotate-[4deg]
          z-40
        "
        {...scaleIn}
        transition={{ delay: 0.2 }}
      />

      {/* MUSIC */}
      <motion.img
        src="/music.png"
        alt="Music"
        className="
          absolute
          top-[33%] left-[28%]
          w-[63%]
          rotate-[-2deg]
          z-30
        "
        {...scaleIn}
        transition={{ delay: 0.15 }}
      />

      {/* LEFT LINES */}
      <motion.img
        src="/left.png"
        alt="Left decoration"
        className="
          absolute
          top-[-6%] left-[-10%]
          w-[16%]
          -rotate-[8deg]
          z-0
        "
        {...scaleIn}
        transition={{ delay: 0.25 }}
      />

      {/* RIGHT LINES */}
      <motion.img
        src="/right.png"
        alt="Right decoration"
        className="
          absolute
          bottom-[18%] right-[-3%]
          w-[15%]
          rotate-[8deg]
          z-0
        "
        {...scaleIn}
        transition={{ delay: 0.3 }}
      />

    </div>
  );
};
