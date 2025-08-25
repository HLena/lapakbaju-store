import { motion } from 'motion/react';
import Image from 'next/image';

interface SidebarProps{
  children: React.ReactNode,
  onToggleSidebar: () => void
}

const Sidebar = ({children, onToggleSidebar}: SidebarProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-20 bg-black/50 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={ onToggleSidebar }
    >
      <motion.aside 
        className='absolute flex flex-col left-0 top-0 bg-white w-5/6 max-w-80 md:w-96 h-screen lg:hidden'
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        
        { children }
      </motion.aside>
    </motion.div>
  )
}

export default Sidebar