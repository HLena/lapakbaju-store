'use client';

import { useUIStore } from "@/store";
import { CiFilter } from "react-icons/ci";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  showFilterButton?: boolean;
}

const Title = ({ title, subtitle, className = "", showFilterButton = false }: TitleProps) => {

  const openFilterPanel = useUIStore(state => state.openFilterPanel);
  
  return (
    <div className={`flex-1 ${className}`}>
      {/* <div className="flex items-center justify-between mb-4"> */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 capitalize mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 font-medium">
              {subtitle}
            </p>
          )}
        </div>
        
          {/* {showFilterButton && (
            <button 
              className='lg:hidden inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm' 
              onClick={openFilterPanel}
            >
              <CiFilter className="w-5 h-5" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          )} */}
      {/* </div> */}
    </div>
  )
}

export default Title