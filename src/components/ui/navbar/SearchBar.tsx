import { div } from "motion/react-client";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="py-2 font-semibold bg-white max-md:absolute max-md:left-0 max-md:top-16 max-md:w-full">
      <div className="py-1.5 pl-4 pr-2 rounded-full bg-gray-100 max-md:w-5/6 flex max-md:m-auto w-80">
        <input type="text" className="outline-0 text-gray-600 flex-1"/>
        <button className="p-2 ml-2 size-9 flex items-center bg-purple-700 rounded-full cursor-pointer">
          <IoSearch className="text-2xl"/>
        </button>
      </div>

    </div>
  )
}

export default SearchBar