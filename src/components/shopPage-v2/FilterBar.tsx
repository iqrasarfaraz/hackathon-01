"use client";
import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  return (
    <>
      <div className="hidden sm:flex justify-between items-center bg-white py-4 border-b border-gray-200 gap-6 flex-col md:flex-row">
        <div className="flex items-center gap-8">
          {[
            { label: "Category", options: ["All", "Electronics", "Clothing"] },
            {
              label: "Product type",
              options: ["All", "Smartphones", "Accessories"],
            },
            { label: "Price", options: ["All", "Low to High", "High to Low"] },
            { label: "Brand", options: ["All", "Apple", "Samsung"] },
          ].map((filter) => (
            <div key={filter.label} className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <span className="text-sm font-medium">{filter.label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sorting by:</span>
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span className="text-sm font-medium">Date added</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-40 flex w-full border-b border-gray-200 bg-white md:hidden text-clash-16 font-clash text-darkPrimary">
        <button className="flex w-1/2 items-center justify-center border-r border-gray-200 py-4 text-sm font-medium">
          Filters
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <button className="flex w-1/2 items-center justify-center py-4 text-sm font-medium">
          Sorting
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default FilterBar;
