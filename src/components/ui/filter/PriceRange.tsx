"use client";

import { useState } from "react";

export default function PriceRange() {
  const [min, setMin] = useState(50);
  const [max, setMax] = useState(500);

  const minValue = 0;
  const maxValue = 1000;

  const left = ((min - minValue) / (maxValue - minValue)) * 100;
  const right = ((max - minValue) / (maxValue - minValue)) * 100;


  return (
    <>

      {/* Valores mostrados */}
      <div className="flex justify-between text-gray-600 text-sm mb-2">
        <span>${min}</span>
        <span>${max}</span>
      </div>

      {/* Sliders */}
      <div className="relative mb-5">
        <div className="absolute h-1 w-full bg-gray-200 rounded"/>

        {/* Rango seleccionado */}
        <div
          className="absolute h-1 bg-violet-700 rounded"
          style={{ left: `${left}%`, right: `${100 - right}%` }}
        ></div>

        {/* Slider mínimo */}
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={min}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value < max) setMin(value);
          }}
          className="h-1 absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:w-2 
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600
            [&::-moz-range-thumb]:cursor-pointer"
        />

        {/* Slider máximo */}
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={max}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value > min) setMax(value);
          }}
          className="h-1 absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600
            [&::-moz-range-thumb]:cursor-pointer"
        />

      </div>
    </>
  );
}
