'use client';

import { useUIStore } from "@/store";
import { CiFilter } from "react-icons/ci";

const Title = () => {

  const openFilterPanel = useUIStore( state => state.openFilterPanel);
  return (
    <div className="flex-1 m-4">
      <h1 className="py-4 text-3xl font-bold text-gray-600">Clothes</h1>
      <button 
        className='block border border-gray-400 rounded-md p-2 text-gray-500 lg:hidden' 
        onClick={openFilterPanel}>
          <CiFilter />
        </button>
    </div>
  )
}

export default Title