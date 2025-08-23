"use client";

import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdAdd, MdRemove } from "react-icons/md";

interface Props{
  quantity: number;
  onQuantityChange?: (quantity: number) => void;
  min?: number;
  max?: number;
};

const QuantitySelector = ({ quantity, onQuantityChange, min = 1, max = 99 }: Props ) => {
  const [quantityProduct, setQuantityProduct] = useState(quantity);

  const onChangeQuantity = (value: number) => {
    const newQuantity = Math.max(min, Math.min(max, quantityProduct + value));
    setQuantityProduct(newQuantity);
    onQuantityChange?.(newQuantity);
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button 
        className="flex justify-center items-center w-10 h-10 text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onChangeQuantity(-1)}
        disabled={quantityProduct <= min}
        aria-label="Decrease quantity"
      >
         <MdRemove className="size-5" />
      </button>
      
      <div className="px-4 py-2 min-w-[3rem] text-center">
        <span className="text-gray-900 font-semibold text-md">
          {quantityProduct}
        </span>
      </div>
      
      <button 
        className="flex justify-center items-center w-10 h-10 text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onChangeQuantity(1)}
        disabled={quantityProduct >= max}
        aria-label="Increase quantity"
      >
        <MdAdd className="size-5" />
      </button>
    </div>
  )
}

export default QuantitySelector;