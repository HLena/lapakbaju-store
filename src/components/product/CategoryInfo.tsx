"use client";

import { GiSettingsKnobs } from "react-icons/gi"
import { Pagination } from '@/components';
import { useUIStore } from "@/store";

interface CategoryInfoProps {
  category: string,
  productsQuantity: number
}

const CategoryInfo = ({ productsQuantity, category }: CategoryInfoProps) => {

  const openFilterPanel = useUIStore( state => state.openFilterPanel);
  
  return (
    <div className="mb-8">
      <p className="text-gray-600 text-sm">
        {productsQuantity} products found in {category}
      </p>
      
      <hr className='my-4'/>
    <div className="flex justify-between items-center bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:justify-end">
      <button 
        onClick={openFilterPanel}
        className='flex items-center gap-4 border border-gray-400 rounded-md px-4 py-2 text-gray-500 cursor-pointer lg:hidden'>
        <GiSettingsKnobs/>
        Filter
      </button>
      <Pagination paginationDetails={{
        total: productsQuantity,
        take: 10,
        skip: 0
      }} />
    </div>
  </div>
  )
}

export default CategoryInfo