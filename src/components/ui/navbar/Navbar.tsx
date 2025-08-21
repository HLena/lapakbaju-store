"use client";

import SearchBar from './SearchBar';
import NabvarMenu from './NavbarMenu';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import { BiMenuAltLeft } from 'react-icons/bi';
import { AnimatePresence } from 'motion/react';

const menuOptions = [
  {
    name: 'women',
    path: '/category/women'
  },
  {
    name: 'men',
    path:  '/category/men'
  },
  {
    name: 'children',
    path:  '/category/children'
  }
]

const Navbar = () => {

  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const toggleNavbarMenu = () => {
    setShowNavbarMenu(prevState => !prevState);
  };


  return (
      <div
        className="fixed top-0 right-0 left-0 w-full h-16 bg-white flex justify-between items-center py-2 px-3 gap-3 border-b z-100"
      >
        <div className="flex text-3xl text-purple-700 font-bold">
          <BiMenuAltLeft onClick={toggleNavbarMenu} className='md:hidden'/>
          <Link href="/" className="ml-4">
            <Image src={"/images/logo.png"} alt="logo" height={140} width={140}/>
          </Link>
        </div>

        {/* <SearchBar/> */}
        {!showNavbarMenu && <Navigation menu={menuOptions}/>}
        

        {/* <div className='flex gap-4 items-center text-sm'>
          <Link href="/auth/register" className='text-gray-500 hidden lg:block'>Sign up</Link>
          <Link
            href="/auth/login"
            className="bg-purple-700 px-5 py-2 rounded-full cursor-pointer font-regular">
            Log in
          </Link>
        </div> */}
        <AnimatePresence>
          {showNavbarMenu && <NabvarMenu menu={menuOptions} toggleNavbar={toggleNavbarMenu}/>}
        </AnimatePresence>

        <div className='flex gap-3 text-violet-700 text-2xl items-center'>
          <Link href="/cart">
            <div className='relative size-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer'>
              <small className='absolute top-0 right-0 size-4 bg-violet-600 text-white text-xs rounded-full text-center'>3</small>
              <FiShoppingCart />
            </div>
          </Link>
          <Image 
            src="/images/products/black-jacket.webp" 
            alt="avatar" 
            height={40} 
            width={40} 
            className='rounded-full border-gray-300 cursor-pointer'
          />
        </div>
        
      </div>

  )
}

export default Navbar












