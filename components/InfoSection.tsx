import React from 'react';

// Inline STATS instead of importing from constants
const STATS = [
  { value: "700+", label: "partner business" },
  { value: "20K+", label: "visitors per event" },
  { value: "5", label: "yrs of experience" }
];

const InfoSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-8 sticky top-8">

      {/* Pink Badge Image */}
      <div className="w-full text-[#5a108a] max-w-md relative group cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          src="/smbus.png"
          alt="Small Business Badge"
          className="w-full h-auto  transform -rotate-2 rounded-xl"
        />

        <div className="absolute -top-4 -left-4 text-brand-purple text-4xl animate-bounce">✨</div>
        <div className="absolute bottom-4 -right-4 text-brand-purple text-4xl">=</div>
      </div>

      {/* Description */}
      <div className="prose  text-[#5a108a] text-brand-[#5a108a] font-medium text-sm md:text-base leading-relaxed max-w-md">
        <p>
          Small businesses are the heart of The Flea Fair. Most of the brands that participate are run by women, students, homepreneurs, and first-time entrepreneurs who turn their passion into products.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 items-start pt-4">
  {STATS.map((stat, idx) => (
    <div key={idx} className="flex flex-col items-center">
      {/* Number with outline effect */}
      <span
        className="relative text-5xl md:text-6xl font-extrabold text-[#5a108a]"
        style={{
          WebkitTextStroke: "3px #3a0a45", // dark purple outline
          color: "#ffffff", // text color white
          textShadow: "2px 2px 2px rgba(58, 10, 69, 0.6)", // subtle dark purple shadow
        }}
      >
        {stat.value}
      </span>

      {/* Label */}
      <span className="text-sm md:text-base font-semibold text-[#5a108a] mt-2 text-center uppercase">
        {stat.label}
      </span>
    </div>
  ))}
</div>

    </div>
  );
};

export default InfoSection;
