import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
interface Props{
  menu: {
    name: string,
    path: string
  }[],
  toggleNavbar: () => void

}

const NavbarMenu = ({menu, toggleNavbar}: Props) => {
  return (
    <motion.div
      className="fixed inset-0 z-20 bg-black/50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={ toggleNavbar }
    >
      <nav className='absolute flex flex-col left-0 top-0 bg-white w-5/6 max-w-80 md:w-96 h-screen lg:hidden'>
        <div className='py-3'>
          <Image 
            src={"/images/logo.png"} 
            alt="logo" 
            height={140} 
            width={140}
            className='m-auto'
          />
        </div>
        {
          menu.map((m, i) => (
            <Link 
              key={m.path} 
              href={m.path}
              className='text-center py-2 capitalize text-gray-700'
            >
              {m.name}
            </Link>
          ))
        }
      </nav>
    </motion.div>
  )
}

export default NavbarMenu