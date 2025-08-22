"use client";

import { useState } from "react"
import Button from "../ui/form/Button"
import Textbox from "../ui/form/Textbox"
import Subtitle from "./Subtitle"
import SummaryOrderItem from "./OrderItem"

const SummaryCart = () => {
  const [code, setCode] = useState('');

  return (
    <div className="space-y-6">
      <Subtitle title="Order Summary"/>
      
      {/* Order Items */}
      <div className="space-y-4">
        <SummaryOrderItem/>
        <SummaryOrderItem/>
        <SummaryOrderItem/>
        <SummaryOrderItem/>
      </div>

      {/* Discount Code */}
      <div className="space-y-3">
        <Textbox 
          name="discount" 
          label="Discount Code" 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
        />
        <Button 
          label="Apply" 
          variant="outline" 
          size="sm"
          className="w-full"
        />
      </div>

      {/* Order Totals */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900 font-medium">$1,390.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>

        <hr className="my-3" />
        
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-900">Total</span>
          <span className="text-violet-600">$1,390.00</span>
        </div>
      </div>
    </div>
  )
}

export default SummaryCart