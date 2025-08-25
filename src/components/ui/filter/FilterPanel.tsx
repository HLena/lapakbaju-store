'use client';

import Colors from "./ColorSelector";
import FilterSection from "./FilterSection"
import PriceRange from "./PriceRange";
import Sizes from "./SizesSelector";
import { AnimatePresence, motion } from 'motion/react';
import { useUIStore } from "@/store";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const clothingCategories: string[] = [
  "T-Shirts",
  "Shirts & Blouses",
  "Pants",
  "Jeans",
  "Shorts",
  "Skirts",
  "Dresses",
  "Sweaters & Cardigans",
  "Jackets",
  "Coats",
  "Suits & Blazers",
  "Accessories",
  "Shoes"
];

const FilterPanel = () => {

  const isFilterPanelOpen = useUIStore( state => state.isFilterPanelOpen);
  const closeFilterPanel = useUIStore( state => state.closeFilterPanel);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [priceRange, setPriceRange] = useState({ min: 50, max: 500 });

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColor("");
    setSelectedSize("");
    setPriceRange({ min: 50, max: 500 });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  console.log(isFilterPanelOpen);

  return (
    <>
      <AnimatePresence>
        {
          isFilterPanelOpen && (
            <Sidebar onToggleSidebar={closeFilterPanel}>
                <div className="flex flex-col h-screen">
                  
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                    <button 
                      onClick={closeFilterPanel}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg 
                        className="w-5 h-5 text-gray-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M6 18L18 6M6 6l12 12" 
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-4 text-gray-800 px-4 py-5 gap-4">
                    <FilterSection title="Category">
                      <ul>
                        {
                          clothingCategories.map(category => (
                            <li key={category}>
                              <label className="text-gray-700 text-sm cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  value={category} 
                                  className="mr-2"
                                  checked={selectedCategories.includes(category)}
                                  onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                              </label>
                            </li>
                          ))
                        }
                      </ul>
                    </FilterSection>

                    <FilterSection title="Price">
                      <PriceRange 
                        min={priceRange.min}
                        max={priceRange.max}
                        onRangeChange={handlePriceRangeChange}
                      />
                    </FilterSection>

                    <FilterSection title="Colors">
                      <Colors 
                        selectedColor={selectedColor}
                        onColorChange={setSelectedColor}
                      />
                    </FilterSection>

                    <FilterSection title="Size">
                      <Sizes 
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                      />
                    </FilterSection>
                  </div>

                  <div className="p-4 border-t border-gray-200 space-y-3">
                    <button 
                      onClick={clearAllFilters}
                      className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Clear All Filters
                    </button>
                    <button 
                      onClick={closeFilterPanel}
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
            </Sidebar>
          )
        }
      </AnimatePresence>

      <aside className="hidden lg:block  lg:shrink-0 min-h-screen bg-white p-4 w-64 h-fit text-gray-800 shadow rounded-lg">
          <div className="space-y-4">
            <FilterSection title="Category">
              <ul>
                {
                  clothingCategories.map(category => (
                    <li key={category}>
                      <label className="text-gray-700 text-sm cursor-pointer">
                        <input 
                          type="checkbox" 
                          value={category} 
                          className="mr-2"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        {category}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </FilterSection>

            <FilterSection title="Price">
              <PriceRange 
                min={priceRange.min}
                max={priceRange.max}
                onRangeChange={handlePriceRangeChange}
              />
            </FilterSection>

            <FilterSection title="Colors">
              <Colors 
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </FilterSection>

            <FilterSection title="Size">
              <Sizes 
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />
            </FilterSection>

            <div className="space-y-3 pt-4 border-t border-gray-200">
              <button 
                onClick={clearAllFilters}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
              <button 
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
      </aside>
    </>
  )
}

export default FilterPanel