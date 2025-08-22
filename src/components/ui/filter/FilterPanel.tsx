'use client';

import Colors from "./ColorSelector";
import FilterSection from "./FilterSection"
import PriceRange from "./PriceRange";
import Sizes from "./SizesSelector";
import { AnimatePresence, motion } from 'motion/react';
import { useUIStore } from "@/store";

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

  return (
    <>
      <AnimatePresence>
        {
          isFilterPanelOpen && (
            <motion.div
              className="fixed inset-0 z-150 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={ closeFilterPanel }
            >
              <motion.aside
                className="absolute top-0 left-0 shadow-lg w-72 h-full bg-white"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "tween", duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex-1 overflow-y-auto h-screen space-y-4 text-gray-800 px-4 py-5 gap-4">
                  <FilterSection title="Category">
                    <ul>
                      {
                        clothingCategories.map(category => (
                          <li key={category}>
                            <label className="text-gray-700 text-sm cursor-pointer">
                              <input type="checkbox" value={category} className="mr-2"/>
                              {category}
                            </label>
                          </li>
                        ))
                      }
                    </ul>
                  </FilterSection>

                  <FilterSection title="Price">
                    <PriceRange/>
                  </FilterSection>

                  <FilterSection title="Colors">
                    <Colors/>
                  </FilterSection>

                  <FilterSection title="Size">
                    <Sizes/>
                  </FilterSection>
                </div>
              </motion.aside>
            </motion.div>
          )
        }
      </AnimatePresence>
      <aside className="hidden lg:block  lg:shrink-0 min-h-screen bg-white p-4 w-64 text-gray-800 shadow rounded-md">
          <FilterSection title="Category">
            <ul>
              {
                clothingCategories.map(category => (
                  <li key={category}>
                    <label className="text-gray-700 text-sm cursor-pointer">
                      <input type="checkbox" value="blouses" className="mr-2"/>
                      {category}
                    </label>
                  </li>
                ))
              }
            </ul>
          </FilterSection>

          <FilterSection title="Price">
            <PriceRange/>
          </FilterSection>

          <FilterSection title="Colors">
            <Colors/>
          </FilterSection>

          <FilterSection title="Size">
            <Sizes/>
          </FilterSection>
      </aside>
    </>
  )
}

export default FilterPanel