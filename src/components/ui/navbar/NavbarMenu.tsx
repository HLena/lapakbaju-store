import { motion } from 'motion/react';
import { nav } from 'motion/react-client';
interface Props{
  menu: {
    name: string,
    path: string
  }[]
}

const NavbarMenu = ({menu}: Props) => {
  return (
    <nav className='absolute right-0 top-16 bg-white w-full  md:w-96 border'>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {
          menu.map((m, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
              className="p-2 text-gray-500"
            >{m.name}
            </motion.li>
          ))
        }
      </motion.ul>
    </nav>
  )
}

export default NavbarMenu