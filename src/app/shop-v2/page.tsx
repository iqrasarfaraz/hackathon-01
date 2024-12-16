import { ButtonMedium } from "@/components/buttons/buttons";
import Card from "@/components/cards/Card";
import MainSection from "@/components/shopPage-v1/MainSection";
import FilterBar from "@/components/shopPage-v2/FilterBar";
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
const ShopV2 = () => {
  return (
    <section className="px-4 sm:px-20">
      <MainSection />
      <div>
        <div>
          <FilterBar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
        <ButtonMedium text="View collection" href="/shop" />
      </div>
    </section>
  );
};

export default ShopV2;
