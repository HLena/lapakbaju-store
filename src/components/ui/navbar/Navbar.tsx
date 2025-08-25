"use client";

import NabvarMenu from './NavbarMenu';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import { AnimatePresence } from 'motion/react';
import { CiMenuBurger } from 'react-icons/ci';
import Sidebar from '../sidebar/Sidebar';
import { VALID_CATEGORIES } from '@/config/categories';

const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onToggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };


  return (
      <div
        className="fixed top-0 right-0 left-0 w-full h-16 bg-white flex justify-between items-center py-2 px-6 gap-3 border-b"
      >
        <div className="flex text-3xl text-violet-600 font-bold">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={ onToggleSidebar }
          >
            <CiMenuBurger className="h-6 w-6" />
          </button>
          
          <Link href="/" className="ml-4">
            <div className='flex gap-2'>
              <Image src="/images/logo-violet.png" alt="logo" height={40} width={40}/>
              <span className=''>Borcelle</span>
            </div>
          </Link>
        </div>
    
        <Navigation options={VALID_CATEGORIES}/>
        
        <AnimatePresence>
          {sidebarOpen && 
            <Sidebar  onToggleSidebar={ onToggleSidebar }>
              <NabvarMenu options={VALID_CATEGORIES}/>
            </Sidebar>}
        </AnimatePresence>

        <div className='flex gap-3 text-violet-700 text-2xl items-center'>
          <Link href="/cart">
            <div className='relative size-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer'>
              <small className='absolute top-0 right-0 size-4 bg-violet-600 text-white text-xs rounded-full text-center'>3</small>
              <FiShoppingCart />
            </div>
          </Link>
          <Link href="/account">
            <Image 
              src="/images/products/black-jacket.webp" 
              alt="avatar" 
              height={40} 
              width={40} 
              className='rounded-full border-gray-300 cursor-pointer'
            />
          </Link>
        </div>
        
      </div>

  )
}

export default Navbar












