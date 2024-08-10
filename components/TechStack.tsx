import { companies } from "@/data";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="pb-20">
      <h2 className="heading">My Tech Stack:</h2>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <Image
              src={img}
              alt={name}
              className="md:w-10 w-5"
              width={30}
              height={30}
            />

            <Image
              src={nameImg}
              alt={name}
              className="md:w-24 w-20"
              width={30}
              height={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
