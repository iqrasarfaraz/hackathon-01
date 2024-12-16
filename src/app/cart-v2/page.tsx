"use client";
import { ButtonMediumDark } from "@/components/buttons/buttons";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Graystone Vase",
    description: "A timeless ceramic vase with a tri-color grey glaze.",
    price: 85,
    image: "/c1.png", // Ensure these files are in the "public" directory
  },
  {
    id: 2,
    name: "Basic White Vase",
    description: "Beautiful and simple, this is one for the classics.",
    price: 125,
    image: "/c2.png", // Ensure these files are in the "public" directory
  },
];

const CartPageV2 = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
    }
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * quantities[product.id],
    0
  );

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-6 sm:px-20 font-satoshi">
      <div className="mx-auto max-w-5xl bg-white shadow-md p-10 mb-10">
        <div className="hidden md:grid grid-cols-[2fr,1fr,1fr] gap-4 mb-8">
          <div className="font-bold">Product</div>
          <div className="text-center font-bold">Quantity</div>
          <div className="text-right font-bold">Total</div>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] items-center gap-4 border-b border-gray-200 pb-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-28 h-42 flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p className="text-sm text-gray-800 mt-1">£{product.price}</p>
                </div>
              </div>

              <div className="flex justify-center md:justify-center items-center">
                <div className="flex items-center space-x-4">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() =>
                      updateQuantity(product.id, quantities[product.id] - 1)
                    }
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() =>
                      updateQuantity(product.id, quantities[product.id] + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">£{(product.price * quantities[product.id]).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-600">
            Taxes and shipping are calculated at checkout.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="font-bold text-lg">Subtotal:</span>
            <span className="text-xl">£{subtotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-right mt-6">
          <ButtonMediumDark text="Go to checkout" href="/" />
        </div>
      </div>
    </div>
  );
};

export default CartPageV2;
