import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants with delays to sync with splash screen
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      delay: 3
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      delay: 3
    }
  }
};

// Simple fade in for the background element
const bgFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, delay: 3 }
  }
};

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-20 relative px-4 sm:px-6 md:px-2">

      {/* 
        --------------------------------------------------
        BACKGROUND IMAGE (Subtract.svg)
        --------------------------------------------------
        Logic applied:
        1. absolute left-0 z-0: Sits behind everything on the left.
        2. hidden: Not visible on mobile.
        3. md:block: Visible on medium screens and up.
        4. md:top-[75%]: On tablets, it sits lower down (partially visible/lower).
        5. lg:top-1/2 lg:-translate-y-1/2: On large screens, it centers vertically (half the screen).
      */}
      <motion.div
        className="absolute left-50 z-0 hidden md:block md:bottom-[-5%] lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[1300px] lg:max-w-[1300px]"
        initial="hidden"
        animate="visible"
        variants={bgFadeIn}
      >
        <Image 
          src="/Subtract.svg" 
          alt="Background Pattern" 
          width={500}
          height={500} 
          className="w-full h-auto opacity-80" // Optional opacity to make sure it doesn't distract
        />
      </motion.div>

      {/* 
        --------------------------------------------------
        HERO IMAGE 2 (Background / Right)
        --------------------------------------------------
      */}
      <motion.div 
        className="relative transform md:-translate-x-50 md:translate-y-20 translate-x-0 translate-y-0 z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 }
        }}
      >
        <Image
          src="/hero2.png"
          alt="Hero Image 2"
          width={500}
          height={500}
          className="rounded-2xl md:rounded-3xl object-cover w-full h-auto"
        />
      </motion.div>

      {/* 
        --------------------------------------------------
        HERO IMAGE 1 (Main / Foreground)
        --------------------------------------------------
      */}
      <motion.div 
        className="relative transform md:-translate-x-20 md:translate-y-0 translate-x-0 -translate-y-4 sm:-translate-y-6 z-20 w-full max-w-[320px] sm:max-w-[460px] md:max-w-[579px]"
        initial="hidden"
        animate="visible"
        variants={fadeInScale}
        whileHover={{ 
          scale: 1.05,
          rotate: -2,
          transition: { duration: 0.3 }
        }}
      >
        <Image
          src="/hero.png"
          alt="Hero Image 1"
          width={569}
          height={569}
          className="rounded-2xl md:rounded-3xl object-cover w-full h-auto"
        />
      </motion.div>

    </section>
  );
};