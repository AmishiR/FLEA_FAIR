import React from 'react';

interface FoundersNote {
  name: string;
  title: string;
  note: string;
  imageSrc: string; // Kept in interface to prevent TypeScript errors in parent components
  linkedinUrl: string;
}

const FoundersNote: React.FC<FoundersNote> = ({
  name,
  title,
  note,
  imageSrc, // This prop is now overridden by the hardcoded image below
  linkedinUrl
}) => {
  // Create a unique ID for the clip path based on the name
  const clipPathId = `founder-shape-${name.replace(/\s+/g, '-').toLowerCase()}`;

  const linkedInIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-8 w-8 fill-[#064789] hover:fill-[#043a5e] transition-colors" 
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
    </svg>
  );

  return (
    <div className="relative flex justify-start items-center px-4 py-40 sm:py-32 overflow-visible">

      {/* 🔵 Blue background */}
      <div
        className="
          absolute top-1/2 transform -translate-y-1/2
          bg-[#60C0FF]
          
          /* Positioning: Starts further left (negative value) */
          left-[-5%] sm:left-[-2%] md:left-[-1%]
          
          /* Width extended */
          w-[125%] sm:w-[125%] md:w-[98%]
          h-[400px] sm:h-[380px]
          
          /* Border Radius: Right side heavy round, Left side subtle round */
          rounded-r-[70px] sm:rounded-r-[120px] 
          rounded-l-[20px] sm:rounded-l-[30px]
          
          z-0
        "
      ></div>

      {/* ⭐ Text Content */}
      <div className="relative z-10 w-full pl-6 sm:pl-[420px] lg:pl-[480px] pr-6 sm:pr-16 lg:pr-20">
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-8 tracking-wide uppercase text-[#064789]">
          {title}
        </h2>

        <p className="text-xs sm:text-sm lg:text-base font-bold leading-relaxed mb-4 sm:mb-4 text-[#f9f9f9]">
          {(note || '').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < (note || '').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <p className="text-base sm:text-2xl lg:text-3xl font-extrabold mb-3 uppercase text-[#064789]">
          {name}
        </p>

        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn profile`}
          className="inline-block"
        >
          {linkedInIcon}
        </a>
      </div>

      {/* 
          🖼 Founder Image 
          - Shadows removed
          - Custom rounded-polygon shape applied via SVG ClipPath
      */}
      <div 
        className="
          absolute left-4 sm:left-8 lg:left-12 top-1/2 
          transform -translate-y-1/2
          w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] lg:w-[400px] lg:h-[540px]
          z-20
          transition-all duration-300 hover:scale-[1.02]
          /* drop-shadow removed here */
        "
      >
        <img 
          src="/ankur.jpeg" 
          alt={name} 
          className="w-full h-full object-cover bg-gray-200"
          style={{
            clipPath: `url(#${clipPathId})`,
            WebkitClipPath: `url(#${clipPathId})`
          }}
        />

        {/* Hidden SVG to define the clip path shape */}
        <svg className="absolute w-0 h-0" width="0" height="0">
          <defs>
            <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
              <path d="
                M 0.08 0 
                L 0.92 0 
                Q 1 0 1 0.08 
                L 0.875 0.90 
                Q 0.85 1 0.75 0.99 
                L 0.08 0.955 
                Q 0 0.95 0 0.87 
                L 0 0.08 
                Q 0 0 0.08 0 
                Z
              " />
            </clipPath>
          </defs>
        </svg>
      </div>

    </div>
  );
};

export default FoundersNote;