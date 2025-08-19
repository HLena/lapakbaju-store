'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BiChevronDown } from 'react-icons/bi';

const FilterSection = ({children, title }: { children: React.ReactNode, title: string}) => {

  const [openSection, setOpenSection ] = useState(true);

  const toggle = () => {
    setOpenSection(prevState => !prevState);
  };


  return (
    <div className='mb-4'>
      <div className='flex justify-between'>
        <span className="font-medium ">{ title }</span>
        <motion.div
          onClick={toggle}
          animate={{ rotate: openSection ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <BiChevronDown className="w-6 h-6 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full" />
        </motion.div>
      </div>
      <AnimatePresence>
        { openSection && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FilterSection