import React from 'react';
import CityCard from './CityCard';

const CITIES = [
  { id: 1, name: "Jaipur", image: "/city1.png" },
  { id: 2, name: "Nagpur", image: "/city2.png" },
  { id: 3, name: "Ahmedabad", image: "/city3.png" },
  { id: 4, name: "Pune", image: "/city4.png" },
  {id: 5, name: "Raipur", image: "/city5.png" },
  {id: 6, name: "Indore", image: "/city6.png" },
  
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
