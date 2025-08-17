"use client";

import SearchBar from './SearchBar';
import NabvarMenu from './NabvarMenu';
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import MenuToggle from "./MenuToggle";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

const menuOptions = [
  {
    name: 'women',
    path: '/product/women'
  },
  {
    name: 'man',
    path:  '/product/man'
  },
  {
    name: 'kids',
    path:  '/product/kids'
  }
]

const Navbar = () => {

  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const toggleNavbarMenu = () => {
    setShowNavbarMenu(prevState => !prevState);
  };


  return (
      <div
        className="fixed top-0 right-0 left-0 w-full h-16 bg-white flex justify-between items-center py-2 px-3 gap-4"
      >
        <div className="flex text-3xl text-purple-700 font-bold">
          <MenuToggle toggle={toggleNavbarMenu} isOpen = {showNavbarMenu} />
          <Link href="/" className="ml-4">
            <Image src={"/images/logo.png"} alt="logo" height={140} width={140}/>
          </Link>
        </div>

        <SearchBar/>

        <Navigation menu={menuOptions}/>

        <button className="bg-purple-700 px-5 py-2 rounded-full cursor-pointer font-regular">
          Log in
        </button>
       
        <AnimatePresence>
          {showNavbarMenu && <NabvarMenu menu={menuOptions}/>}
        </AnimatePresence>
        
      </div>

  )
}

export default Navbar












