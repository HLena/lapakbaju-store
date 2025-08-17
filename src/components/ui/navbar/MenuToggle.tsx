
import { IoClose } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) => (
  <button 
    onClick={toggle}
    className="flex outline-none border-none cursor-pointer md:hidden"
  >
    {
        isOpen
        ? <IoClose />
        : <BiMenuAltLeft />
    }
      
  </button>
)
 export default MenuToggle;