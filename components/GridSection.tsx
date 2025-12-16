import React from 'react';
import CityCard from './CityCard';

const CITIES = [
  { id: 1, name: "Jaipur", image: "/jaipur.jpg" },
  { id: 2, name: "Nagpur", image: "/nagpur.avif" },
  { id: 3, name: "Ahmedabad", image: "/ahmedabad.jpeg" },
  { id: 4, name: "Pune", image: "/pune.webp" },
  {id: 5, name: "Raipur", image: "/Raipur.png" , offsetY: "translate-y-4" },
  {id: 6, name: "Indore", image: "/indore.webp" },
  
];

const GridSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {CITIES.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default GridSection;
