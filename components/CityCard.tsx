import React from 'react';
import { CityEvent } from '../types';

interface CityCardProps {
  city: CityEvent;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const isGrayscale = city.status === 'coming-soon';

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
      {/* Background Image */}
      <div className={`absolute inset-0 bg-gray-200 transition-all duration-500 ease-in-out ${isGrayscale ? 'grayscale group-hover:grayscale-0' : ''}`}>
         <img 
            src={city.image} 
            alt={city.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

      {/* Top Left Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-amber-400 text-brand-purple text-[0.6rem] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
          {city.dateLabel}
        </span>
      </div>

       {/* Optional Top Location Tag */}
       {city.locationLabel && (
        <div className="absolute top-4 right-12 z-10">
           <span className="bg-white/90 text-brand-purple text-[0.6rem] md:text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-sm backdrop-blur-sm">
            {city.locationLabel}
          </span>
        </div>
       )}

      {/* Instagram Icon */}
      <div className="absolute top-4 right-4 z-10 text-white hover:text-pink-200 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>

      {/* Bottom Center Name Badge */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="bg-white px-6 py-1 md:py-2 rounded-lg shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-xl md:text-3xl font-black text-brand-purple uppercase tracking-widest">
            {city.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
