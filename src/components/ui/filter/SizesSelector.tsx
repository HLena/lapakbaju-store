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
  sizes?: Sizes[]
}

const SizesSelector = ({selectedSize = '', sizes = sizesTmp}: SizesProps) => {

  const [currentSize, setCurrentSize] = useState(selectedSize);
  return (
    <div className="flex flex-wrap gap-2">
      {
        sizes.map(size => (
          <div 
            key={size}
            onClick={ () => setCurrentSize(size) }
            className = {
              clsx(
                "p-1 cursor-pointer border border-gray-300 rounded-md text-sm text-center text-gray-500  min-w-12",
                currentSize == size && "bg-violet-600 text-white",
              )
            }>
            {size}
          </div>
        ))
      }
    </div>
  )
}

export default SizesSelector