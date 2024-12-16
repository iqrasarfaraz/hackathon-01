import React from "react";
import { ButtonMedium } from "../buttons/buttons";
import Image from "next/image";

const MainSection = () => {
  return (
    <>
      <section className="hidden bg-[url('/home-v2.png')] bg-cover bg-center py-20 md:flex items-center justify-end px-20">
        <div className="bg-white w-[730px] h-[500px] p-10 flex justify-between flex-col">
          <div className="flex space-y-2 flex-col">
            <h2 className="text-[#22202E] text-clash-32 font-clash">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p className="text-[#5B5676] font-satoshi text-satoshi-14">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <div>
            <ButtonMedium text="View Collection" href="/" />
          </div>
        </div>
      </section>
      <section className="block   :hidden">
        <div className="text-darkPrimary px-4 my-8">
          <h2 className="text-[#22202E] text-clash-24 font-clash">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="text-[#5B5676] font-satoshi text-satoshi-16 my-4">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <ButtonMedium text="View collection" href="/shop" />
        </div>
        <div>
          <Image
            src={"/home-v2-small.png"}
            alt="home-v2-small"
            height={300}
            width={390}
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default MainSection;
