import Image from "next/image";
import React from "react";

export const FleaFairLogo: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center pt-2 pb-2 pl-40 md:pt-1 translate-y-10 -pl-10">
      <Image
        src="/fleafairlg.png"
        alt="The Flea Fair"
        width={1500}
        height={450}
        priority
        className="max-w-full h-auto"
      />
    </section>
  );
};
