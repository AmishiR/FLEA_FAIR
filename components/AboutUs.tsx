import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function AboutUs() {
  return (
    <section className="w-full bg-[#F8F7F5] py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* About Us Title */}
            <motion.div className="inline-block" variants={fadeInUp}>
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#a3e635] z-[10] to-[#84cc16] rounded-2xl transform -rotate-4"
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <h2 className="relative px-6 py-3 text-4xl md:text-5xl z-[10] font-black uppercase text-[#0ea5e9] transform -rotate-4">
                  ABOUT
                </h2>
              </div>
              <div className="relative -mt-3 ml-20">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#ef4444] to-[#dc2626] w-30 rounded-2xl transform rotate-3"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <h2 className="relative px-6 py-3 text-4xl md:text-5xl font-black uppercase text-[#fbbf24] transform rotate-3">
                  US
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-6 text-[#5b21b6] leading-relaxed"
              variants={fadeInUp}
            >
              <p className="text-base md:text-lg">
                <span className="font-bold text-lg md:text-xl">The Flea Fair</span> is a community-driven marketplace that brings together small businesses, homegrown brands, artists, creators, and thousands of visitors under one vibrant space. Started in 2021, the fair now welcomes 20,000+ visitors annually, hosts 150+ local businesses, and is powered by a passionate team of 100+ volunteers.
              </p>

              <p className="text-base md:text-lg font-semibold">
                Our mission is simple — support small businesses, promote local talent, and create an experience that the city loves.
              </p>
            </motion.div>

            {/* Social Media */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-black uppercase text-[#5b21b6] tracking-wide">
                FOLLOW US ON SOCIALS
              </h3>
              <motion.div 
                className="flex gap-4"
                variants={staggerContainer}
              >
                <motion.a 
                  href="https://instagram.com/thefleafair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.a>
                <motion.a 
                  href="https://facebook.com/thefleafair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1877f2] flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                </motion.a>
                <motion.a 
                  href="https://youtube.com/@thefleafair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ff0000] flex items-center justify-center"
                  variants={scaleIn}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3x3 Image Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Position 1 - Blue block */}
            <motion.div 
              className="bg-[#0ea5e9] h-32 rounded-tr-[60px] sm:h-40 md:h-48"
              variants={rotateIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            ></motion.div>
            
            {/* Position 2 - Image (rounded top-right) */}
            <motion.div 
              className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/hero1.png" 
                alt="Flea Fair Event" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Position 3 - Yellow block */}
            <motion.div 
              className="bg-[#fbbf24] h-32 rounded-tl-[60px] sm:h-40 md:h-48"
              variants={rotateIn}
              whileHover={{ scale: 1.05, rotate: -2 }}
            ></motion.div>
            
            {/* Position 4 - Image (rounded top-right) */}
            <motion.div 
              className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/hero2.png" 
                alt="Community Gathering" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Position 5 - Logo */}
            <motion.div 
              className="bg-white h-32 sm:h-40 md:h-48 flex items-center justify-center p-2"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <img 
                src="/image.png" 
                alt="The Flea Fair Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Position 6 - Image (rounded top-right) */}
            <motion.div 
              className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/hero1.png" 
                alt="Vendors" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Position 7 - Image (rounded top-right) */}
            <motion.div 
              className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/hero2.png" 
                alt="Event Atmosphere" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Position 8 - Pink block */}
            <motion.div 
              className="bg-[#ec4899] h-32 rounded-tr-[60px] sm:h-40 md:h-48"
              variants={rotateIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
            ></motion.div>
            
            {/* Position 9 - Image (rounded top-right) */}
            <motion.div 
              className="h-32 sm:h-40 md:h-48 overflow-hidden rounded-tr-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/hero1.png" 
                alt="Flea Fair Experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}