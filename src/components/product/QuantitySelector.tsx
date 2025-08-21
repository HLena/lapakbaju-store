"use client";

import { useState } from "react";

interface Props{
  quantity: number, 
};

const  QuantitySelector = ({ quantity }: Props ) => {

  const [quantityProduct, setQuantityProduct] = useState(quantity);

  const onChangeQuantity = (value: number) => {

    if(quantityProduct >= 0)  {
      setQuantityProduct(Math.max(0, quantityProduct + value));
    } 
  }

  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-full px-4">
      <button 
        className="flex justify-center items-center font-semibold p-1 size-8  rounded-full text-gray-300  cursor-pointer"
        onClick={ () => onChangeQuantity(-1) }
      >-</button>
      <span 
        className="text-gray-700 font-semibold">
        {quantityProduct}
      </span>
      <button 
        className="flex justify-center items-center font-semibold p-1 size-8  rounded-full text-gray-300 cursor-pointer"
        onClick={ () => onChangeQuantity(1) }
      >+</button>

    </div>
  )
}

export default QuantitySelector