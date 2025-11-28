import React from 'react';


const Sponsors: React.FC = () => {
  return (
    <section className="text-center py-8 px-4">
         <h2 className="text-10xl md:text-8xl font-black text-brand-purple uppercase tracking-tighter mb-15"> 
            The Flea Fair Sponsors 
         </h2>

      {/* Main Sponsor */}
      <div className="flex justify-center mb-12">
        <div className="max-w-[450px] w-full">
          <img 
            src="/raisoni.png"
            alt="Raisoni Education"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Sub Sponsors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-6xl mx-auto px-4">

        <img 
          src="/cadence.png"
          alt="Cadence Academy"
          className="w-32 md:w-40 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
        />

        <img 
          src="/ktm.png"
          alt="KTM"
          className="w-24 md:w-32 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
        />

        <img 
          src="/sunrise.webp"
          alt="Sunrise Farms"
          className="w-32 md:w-40 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
        />

        <img 
          src="/TicketWings-Light.svg"
          alt="Ticketwings"
          className="w-32 md:w-40 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
        />

      </div>
    </section>
  );
};

export default Sponsors;
