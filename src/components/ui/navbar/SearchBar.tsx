import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="py-1.5 pl-4 pr-2 hidden rounded-full bg-gray-100 w-1/2 md:flex">
      <input type="text" className="outline-0 text-gray-600 flex-1"/>
      <button className="p-2 ml-2 size-9 flex items-center bg-purple-700 rounded-full cursor-pointer">
        <IoSearch className="text-2xl"/>
      </button>
    </div>
  )
}

export default SearchBar