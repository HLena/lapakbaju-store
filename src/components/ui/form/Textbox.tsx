"use client";

import { useState, ChangeEvent } from "react";

interface Props {
  label: string,
  type?: string,
  value?: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  className?: string
}

const Textbox = ({
  label,
  type = "text",
  value = "",
  onChange,
  name,
  className = ""
}: Props) => {

  const [focused, setFocused] = useState(false);
  
  return (
    <div className="relative">
      <input 
        type={type} 
        value={value}
        name={name}
        onChange={onChange} 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full capitalize text-gray-900 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors ${className}`}
      />
      <label
        className={`absolute left-3 text-gray-500 transition-all duration-200 
          ${focused || value ? "-top-2 text-xs bg-white px-1 text-violet-600 font-medium" : "top-3 text-sm"}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Textbox