"use client"
import clsx from "clsx";
import { useState } from "react";

const colors = [
  { name: "Violet", hex: "#A855F7", color: "violet-300" },
  { name: "Black", hex: "#000000", color: "gray-300" },
  { name: "Red", hex: "#EF4444", color: "red-300" },
  { name: "Orange", hex: "#F97316", color: "orange-300" },
  { name: "Blue", hex: "#3B82F6", color: "blue-300" },
  { name: "White", hex: "#FFFFFF", color: "white" },
  { name: "Brown", hex: "#92400E", color: "amber-300" },
  { name: "Green", hex: "#22C55E", color: "green-300" },
  { name: "Yellow", hex: "#EAB308", color: "yellow-300" },
  { name: "Gray", hex: "#6B7280", color: "gray-300" },
  { name: "Pink", hex: "#EC4899", color: "pink-300" },
];

interface Props {
  selectedColor?: string 
}

const ColorSelector = ({ selectedColor = "" }: Props) => {

  const [currentColor, setCurrentColor] = useState(selectedColor);

  return (
    <div className="flex flex-wrap gap-3">
      {
        colors.map(color => (
          <div
            key={color.hex} 
            className="flex flex-col items-center cursor-pointer">
            <div 
              key={color.name} 
              onClick={ () => setCurrentColor(color.name)}
              className={
                clsx(
                  "size-8 rounded-xl border-1 border-gray-100",
                  color.name == currentColor && "border-2 border-gray-600"
                )
              }
              style={{ backgroundColor: color.hex }}
            />
            <small 
              className={
                clsx(
                  "text-gray-400 text-[10px] mt-2",
                  color.name == currentColor && "font-semibold text-gray-600"
                )
              }
            >{color.name}</small>
          </div>
        ))
      }
    </div>
  )
}

export default ColorSelector