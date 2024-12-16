import { ButtonMedium } from "@/components/buttons/buttons";
import Card from "@/components/cards/Card";
import FilterBar from "@/components/shopPage-v2/FilterBar";
import EmailSignup from "@/components/shopPage-v3/EmailSignup";
import MainSection from "@/components/shopPage-v3/MainSection";
import React from "react";
const cardData = [
  {
    image: "/cards/c1.png",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    image: "/cards/c2.png",
    title: "The Elegant Sofa",
    price: "£500",
  },
  {
    image: "/cards/c3.png",
    title: "The Cozy Armchair",
    price: "£300",
  },
  {
    image: "/cards/c4.png",
    title: "The Luxurious Bed",
    price: "£800",
  },
  {
    image: "/cards/c1.png",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    image: "/cards/c2.png",
    title: "The Elegant Sofa",
    price: "£500",
  },
  {
    image: "/cards/c3.png",
    title: "The Cozy Armchair",
    price: "£300",
  },
  {
    image: "/cards/c4.png",
    title: "The Luxurious Bed",
    price: "£800",
  },
  {
    image: "/cards/c1.png",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    image: "/cards/c4.png",
    title: "The Luxurious Bed",
    price: "£800",
  },
  {
    image: "/cards/c1.png",
    title: "The Dandy Chair",
    price: "£250",
  },
  {
    image: "/cards/c2.png",
    title: "The Elegant Sofa",
    price: "£500",
  },
];
const ShopV3 = () => {
  return (
    <>
      <MainSection />
      <section className="px-20">
        <FilterBar />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <ButtonMedium href="/shop" text="View collection" />
        </div>
      </section>
      <EmailSignup />
    </>
  );
};

export default ShopV3;
