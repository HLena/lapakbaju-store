"use client";

import { useState } from "react"
import Button from "../ui/form/Button"
import Textbox from "../ui/form/Textbox"
import Subtitle from "./Subtitle"
import SummaryOrderItem from "./OrderItem"

const SummaryCart = () => {

  const [ code, setCode ] = useState('');

  return (
    <div>
      <Subtitle title="Summary Order"/>
      <SummaryOrderItem/>
      <SummaryOrderItem/>
      <SummaryOrderItem/>
      <SummaryOrderItem/>

      <div className="grid grid-flow-col gap-4">
          <Textbox 
            name="discount" 
            label="Dicount Code" 
            className="col-span-3" 
            value={code} 
            onChange={(e) => setCode(e.target.value)}
          />
          <Button label="Apply" className="col-span-1"/>
      </div>
      <p className="flex justify-between text-sm mb-4">
        <span>Subtotal</span>
        <span>$ 1390.00</span>
      </p>

      <p className="flex justify-between text-sm mb-4">
        <span>Shipping</span>
        <span>FREE</span>
      </p>

      <p className="flex justify-between text-lg font-semibold my-4">
        <strong>Total</strong>
        <strong>$ 1390.00</strong>
      </p>
    </div>
  )
}

export default SummaryCart