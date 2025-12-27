"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";

const scaleIn: MotionProps = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
};

export const StickerCluster: React.FC = () => {
  return (
    <section className="w-full flex justify-center md:justify-start items-center px-4 sm:px-6 md:px-8 mt-10 md:mt-0">
      <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[520px] aspect-[1.1/1] mx-auto md:mx-0">

        <motion.img
          src="/SMALL_BUISNESS.png"
          alt="Small Business"
          className="absolute bottom-[28%] left-[10%] w-[78%] -rotate-[2deg] z-20 pointer-events-none"
          {...scaleIn}
        />

        <motion.img
          src="/FOOD.png"
          alt="Food"
          className="absolute top-[4%] left-[6%] w-[62%] -rotate-[6deg] z-30 pointer-events-none"
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.1 }}
        />

        <motion.img
          src="/&.png"
          alt="And"
          className="absolute top-[14%] left-[50%] w-[20%] rotate-[4deg] z-40 pointer-events-none"
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.2 }}
        />

        <motion.img
          src="/music.png"
          alt="Music"
          className="absolute top-[26%] left-[28%] w-[63%] -rotate-[2deg] z-20 pointer-events-none"
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.15 }}
        />

        <motion.img
          src="/left.png"
          alt="Left decoration"
          className="absolute top-[6%] left-[-8%] w-[16%] -rotate-[8deg] z-10 pointer-events-none"
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.25 }}
        />

        <motion.img
          src="/right.png"
          alt="Right decoration"
          className="absolute bottom-[30%] right-[-4%] w-[15%] rotate-[8deg] z-10 pointer-events-none"
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.3 }}
        />

      </div>
    </section>
  );
};
