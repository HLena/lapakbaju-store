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
  selectedColor?: string;
  onColorChange?: (color: string) => void;
}

const ColorSelector = ({ selectedColor = "", onColorChange }: Props) => {
  const [currentColor, setCurrentColor] = useState(selectedColor);

  const handleColorSelect = (colorName: string) => {
    setCurrentColor(colorName);
    onColorChange?.(colorName);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {
        colors.map(color => (
          <button
            key={color.hex} 
            onClick={() => handleColorSelect(color.name)}
            className="flex flex-col items-center cursor-pointer group"
            aria-label={`Select color ${color.name}`}
          >
            <div 
              className={clsx(
                "size-10 rounded-full border-2 transition-all duration-200 shadow-sm",
                "hover:scale-110 hover:shadow-md",
                currentColor === color.name 
                  ? "border-violet-600 ring-2 ring-violet-200" 
                  : "border-gray-200 hover:border-gray-300"
              )}
              style={{ backgroundColor: color.hex }}
            />
            <span 
              className={clsx(
                "text-xs mt-2 transition-colors duration-200",
                currentColor === color.name 
                  ? "font-semibold text-violet-600" 
                  : "text-gray-500 group-hover:text-gray-700"
              )}
            >
              {color.name}
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default ColorSelector;