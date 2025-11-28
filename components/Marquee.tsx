import React from "react";
import { Star } from "lucide-react";

interface MarqueeProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = "JAIPUR EDITION 24th & 25th JANUARY AT BIRLA AUDITORIUM",
  bgColor = "#C4EBFF",
  textColor = "#5d00bb",
  iconColor = "#5d00bb",
}) => {
  return (
    <div 
      className="w-full overflow-hidden py-2" 
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {/* repeat twice for perfect infinite scroll */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex">
            {[...Array(10)].map((_, i) => (
              <div key={`${groupIndex}-${i}`} className="flex items-center mx-6">
                <Star 
                  className="w-4 h-4" 
                  style={{ color: iconColor, fill: iconColor }}
                />
                <span
                  className="font-bold tracking-wide mx-4"
                  style={{
                    fontFamily: "Helvetica World, Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    color: textColor,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};