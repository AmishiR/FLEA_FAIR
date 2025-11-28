"use client"
import { Marquee } from './Marquee';
import React, { useState } from 'react';
import Image from 'next/image';

export default function QuickLinksFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Add your email submission logic here
    setEmail('');
  };

  return (
    <div className="w-full">
      {/* Quick Links Section */}
      <section className="relative overflow-hidden bg-[#d0fea6]  pb-16">
        {/* Event Banner */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm font-bold text-purple-800">
          <Marquee bgColor='#d0fea6'/>
        </div>

        {/* Quick Links Title */}
        <h2 className="mb-10 flex items-center justify-center gap-5 text-center text-5xl font-black uppercase text-purple-800 md:text-6xl">
          <span className="text-6xl md:text-7xl">🔥</span>
          QUICK LINKS
          <span className="text-6xl md:text-7xl">🔥</span>
        </h2>

        {/* Links Container */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Jaipur Links */}
          <div className="group min-h-[150px] cursor-pointer rounded-3xl border-4 border-purple-800 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-black uppercase text-purple-800">
              Jaipur Links
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ stalls
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ vendors
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ artists
              </li>
            </ul>
          </div>

          {/* Join as Partner */}
          <div className="group min-h-[150px] cursor-pointer rounded-3xl border-4 border-purple-800 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-black uppercase text-purple-800">
              Join as a Partner
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ Sponsorship Form
              </li>
            </ul>
          </div>

          {/* Hiring */}
          <div className="group min-h-[150px] cursor-pointer rounded-3xl border-4 border-purple-800 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-black uppercase text-purple-800">
              Hiring
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ Designer
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ PR Head
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ Marketing Head
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="group min-h-[150px] cursor-pointer rounded-3xl border-4 border-purple-800 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-black uppercase text-purple-800">
              Connect
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ About Us
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ Contact
              </li>
              <li className="cursor-pointer text-gray-800 transition-colors hover:text-purple-800">
                ↪ FAQ
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5e1687] px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {/* Footer Top */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-xl">
              <span className="text-3xl">✉</span>
              <span>info@thefleafair.com</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <span className="text-3xl">📷</span>
              <span>@thefleafair</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-12">
            <h4 className="mb-4 flex items-center gap-3 text-base font-bold uppercase">
              SIGN UP FOR UPDATES <span>▼</span>
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Enter your email address"
                className="w-full max-w-md rounded-full border-none bg-white/90 px-6 py-4 text-base text-gray-800 outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="text-center text-5xl font-black lowercase text-pink-300 md:text-7xl lg:text-8xl" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', letterSpacing: '-2px', textShadow: '3px 3px 0px rgba(0,0,0,0.1)' }}>
            <img src="/image.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}