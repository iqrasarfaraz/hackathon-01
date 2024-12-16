import Image from "next/image";
import React from "react";
import { ButtonMediumLight } from "../buttons/buttons";

const Feature = () => {
  return (
    <section className="px-4 sm:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
      {/* Left Column */}
      <div className="bg-darkPrimary py-10 px-8 flex flex-col justify-between h-full">
        <div className="text-white space-y-4">
          <h2 className="font-clash text-clash-32">
            It started with a small idea
          </h2>
          <p className="font-satoshi text-satoshi-18">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="mt-32">
          <ButtonMediumLight text="View collection" href="/shop" />
        </div>
      </div>

      {/* Right Column */}
      <div className="">
        <Image
          src={"/home-v2-bottom.png"}
          alt="home-v2-bottom"
          height={480}
          width={630}
          className="object-cover h-[100%] w-full"
        />
      </div>
    </section>
  );
};

export default Feature;
