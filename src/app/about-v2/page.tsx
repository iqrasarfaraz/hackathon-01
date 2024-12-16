import Feature from "@/components/aboutPage/Feature";
import HomeFeature from "@/components/homePage-v2/Feature";
import { ButtonMedium } from "@/components/buttons/buttons";
import FeaturesSection from "@/components/homePage-V1/FeaturesSection";
import WishList from "@/components/homePage-V1/WishList";
import React from "react";

const AboutV2 = () => {
  return (
    <>
      <section className="px-4 sm:px-20 py-10 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="font-clash text-[28px] md:text-[38px] ">
          A brand built on the love of craftmanship,
          <br /> quality and outstanding customer service
        </h1>
        <ButtonMedium text="View Our products" href="/shop" />
      </section>
      <HomeFeature />
      <Feature
        orderClass="order-2"
        title="Our service isn’t just personal, it’s actually hyper personally exquisite"
        description={`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.`}
        image="/about.png"
      />

      <FeaturesSection alignText="justify-center" />
      <WishList />
    </>
  );
};

export default AboutV2;
