import React from 'react';

interface FoundersNote {
  name: string;
  title: string;
  note: string;
  imageSrc: string;
  linkedinUrl: string;
}

const FoundersNote: React.FC<FoundersNote> = ({
  name,
  title,
  note,
  imageSrc,
  linkedinUrl
}) => {

  const linkedInIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 fill-white hover:fill-blue-800 transition-colors" 
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
    </svg>
  );

  return (
    <div className="relative flex justify-center items-center px-4 py-16 sm:py-24">

      {/* 🔵 Blue background */}
      <div
        className="
          absolute inset-y-0 left-0 
          bg-[#60C0FF]
          rounded-r-[200px]
          w-[2000%] sm:w-[85%] md:w-[80%]
          z-0
        "
      ></div>

      {/* ⭐ Text Content */}
      <div className="relative z-10 max-w-4xl pl-6 sm:pl-48 lg:pl-64">

        {/* Title - dark blue */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-wider text-[#064789]">
          {title}
        </h2>

        {/* Paragraph - dark blue */}
        <p className="text-xs sm:text-sm leading-relaxed mb-4 text-[#064789]">
          {(note || '').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < (note || '').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        {/* Name - dark blue */}
        <p className="text-lg sm:text-xl font-bold mb-2 uppercase text-[#064789]">
          {name}
        </p>

        {/* LinkedIn icon */}
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

      {/* 🖼 Founder Image */}
      <div 
        className="
          absolute left-4 sm:left-6 top-1/2 
          transform -translate-y-1/2
          w-[250px] h-[280px] sm:w-[313px] sm:h-[330px]
          z-20
          transition-all duration-300 hover:scale-[1.03]
        "
      >
        <img 
          src={imageSrc} 
          alt={name} 
          className="
            w-full h-full object-cover shadow-2xl 
            rounded-xl sm:rounded-t-3xl 
            [clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_90%)]
            bg-gray-200
          "
        />
      </div>

    </div>
  );
};

export default FoundersNote;
