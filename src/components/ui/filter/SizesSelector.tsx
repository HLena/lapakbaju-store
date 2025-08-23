'use client';

import { Sizes } from "@/interfaces/product";
import { clsx } from 'clsx';
import { useState } from "react";

const sizesTmp: Sizes[] = [
  "XS",   // Extra Small
  "S",    // Small
  "M",    // Medium
  "L",    // Large
  "XL",   // Extra Large
  "XXL",  // 2 Extra Large
  "XXXL"  // 3 Extra Large
];

interface SizesProps {
  selectedSize?: string,
  sizes?: Sizes[],
  onSizeChange?: (size: Sizes) => void
}

const SizesSelector = ({selectedSize = '', sizes = sizesTmp, onSizeChange}: SizesProps) => {
  const [currentSize, setCurrentSize] = useState(selectedSize);
  
  const handleSizeSelect = (size: Sizes) => {
    setCurrentSize(size);
    onSizeChange?.(size);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {
        sizes.map(size => (
          <button
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={clsx(
              "px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 min-w-[3rem] text-center",
              "hover:border-violet-500 hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
              currentSize === size 
                ? "bg-violet-600 text-white border-violet-600 shadow-md" 
                : "border-gray-300 text-gray-700 hover:bg-violet-50"
            )}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))
      }
    </div>
  )
}

export default SizesSelector;