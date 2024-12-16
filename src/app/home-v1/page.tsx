import EmailSignupSection from "@/components/aboutPage/EmailSignupSection";
import CardListing from "@/components/homePage-V1/CardListing";
import FeaturesSection from "@/components/homePage-V1/FeaturesSection";
import Feature from "@/components/homePage-v2/Feature";
import MainSection from "@/components/homePage-v2/MainSection";
import React from "react";

const HomeV1 = () => {
  return (
    <>
      <MainSection />
      <FeaturesSection alignText="justify-center" />
      <CardListing />
      <Feature />
      <EmailSignupSection />
    </>
  );
};

export default HomeV1;
