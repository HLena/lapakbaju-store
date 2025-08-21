'use client';
import { useState, type ChangeEvent } from "react";

interface Props {
  name: string,
  label: string,
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  label,
  name,
  options,
  value = "",
  onChange,
}: Props) => {

  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full text-gray-600 border border-gray-200 rounded-lg p-4 focus:outline-2 focus:outline-violet-500 peer bg-white mb-4"
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-gray-600">
            {opt.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-3 text-gray-500 transition-all duration-200 capitalize
          ${focused || value ? "-top-2 text-xs bg-white px-1 text-blue-500" : "top-5 text-sm"}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Select