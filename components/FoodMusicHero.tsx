'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Configuration & Variants ---

const colors = {
  greenBg: '#C8FF5D',
  blueText: '#2DADFF',
  greyBg: '#D1D5DB', 
  orangeText: '#FF6B2C',
  redBg: '#FF2E2E',
  goldText: '#FCCD2A',
  pinkBg: '#FF66C4',
  purpleText: '#4A009A',
  bg: '#F9F9F9'
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 20 }
  }
};

const burstPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function FoodMusicHero() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F9F9F9] p-4 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');
        .font-bowlby {
          font-family: 'Bowlby One', cursive;
        }
      `}</style>

      <motion.div 
        className="relative flex flex-col items-center max-w-4xl w-full py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        
        {/* --- Top Section: Wrapper --- */}
        {/* Increased height to accommodate the "Music below" layout */}
        <div className="relative w-full flex justify-center h-[300px] mb-[-20px]">
          
          {/* 
             & Block 
             Position: Extreme Left of Food. High Z-Index to stay on top.
          */}
          <motion.div
            variants={popIn}
            className="absolute left-[1%] sm:left-[49%] top-19 z-40 transform rotate-[12deg]"
            whileHover={{ scale: 1.1, rotate: 20 }}
          >
            <div 
              className="px-5 py-3 sm:px-7 sm:py-5 rounded-2xl shadow-xl border-2 border-white/20"
              style={{ backgroundColor: colors.greyBg }}
            >
              <h1 className="font-bowlby text-5xl sm:text-7xl" style={{ color: colors.orangeText }}>
                &
              </h1>
            </div>
          </motion.div>

          {/* 
             FOOD Block 
             Position: Moved bit to the right (left-30/35%). Z-Index 30.
          */}
          <motion.div
            variants={popIn}
            className="absolute left-[1%] sm:left-[10%] top-8 z-30 transform -rotate-[4deg] origin-bottom-right"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div 
              className="px-8 py-3 sm:px-12 sm:py-5 rounded-3xl shadow-lg border-2 border-transparent"
              style={{ backgroundColor: colors.greenBg }}
            >
              <h1 className="font-bowlby text-5xl sm:text-7xl lg:text-8xl tracking-tighter" style={{ color: colors.blueText }}>
                FOOD
              </h1>
            </div>
          </motion.div>

          {/* 
             MUSIC Block 
             Position: Behind (& and Food) and Below them. Z-Index 10.
          */}
          <motion.div
            variants={popIn}
            className="absolute right-[1%] sm:right-[10%] top-3 sm:top-45 z-10 transform rotate-[2deg]"
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            <div 
              className="px-30 py-4 sm:px-16 sm:py-7 rounded-3xl shadow-lg"
              style={{ backgroundColor: colors.redBg }}
            >
              <h1 className="font-bowlby text-5xl sm:text-7xl lg:text-8xl tracking-tighter" style={{ color: colors.goldText }}>
                MUSIC
              </h1>
            </div>
          </motion.div>
        </div>

        {/* --- Middle Section: SMALL BUSINESS --- */}
        <div className="relative w-full flex justify-center items-center z-5 mt-5">
          
          {/* Left Decoration Bursts */}
          <div className="absolute left-[-100px] sm:left-4 top-1/2 -translate-y-1/2 block">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <motion.path 
                d="M50 10 L10 25" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
              />
              <motion.path 
                d="M55 40 L15 45" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
                custom={1}
              />
               <motion.path 
                d="M50 70 L20 65" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
                custom={2}
              />
            </svg>
          </div>

          {/* SMALL BUSINESS Block */}
          <motion.div
            variants={popIn}
            className="relative transform -rotate-[2deg] z-50"
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <div 
              className="px-7 py-6 sm:px-15 sm:py-7 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] text-center"
              style={{ backgroundColor: colors.pinkBg }}
            >
              <h2 
                className="font-bowlby text-3xl sm:text-4xl lg:text-[6.5rem] leading-[0.85] uppercase tracking-tight" 
                style={{ color: colors.purpleText }}
              >
                Small <br /> Business
              </h2>
            </div>
          </motion.div>

          {/* Right Decoration Bursts */}
          <div className="absolute right-[-10px] sm:right-4 top-1/2 -translate-y-1/2 block">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <motion.path 
                d="M10 20 L50 10" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
              />
              <motion.path 
                d="M5 45 L45 50" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
              />
               <motion.path 
                d="M15 70 L40 85" 
                stroke={colors.purpleText} strokeWidth="8" strokeLinecap="round"
                variants={burstPathVariants}
              />
            </svg>
          </div>
        </div>

        {/* --- Bottom Section: Tagline --- */}
        <motion.div 
          variants={popIn}
          className="mt-12 text-center transform -rotate-2"
        >
          <h3 
            className="font-bowlby text-xl sm:text-3xl uppercase tracking-widest" 
            style={{ color: colors.purpleText }}
          >
            Shop. Eat. Groove. Repeat.
          </h3>
        </motion.div>

      </motion.div>
    </div>
  );
}