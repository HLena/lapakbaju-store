import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProp{
  paginationDetails: {
    total: number,
    take: number,
    skip: number
  }
}
const Pagination = ({paginationDetails}: PaginationProp) => {

  const { total, take, skip } = paginationDetails;
  const numberPages = Math.ceil(total / take);
  const pages = Array.from({length: numberPages}, (_, i) => i +1 );
  return (
    <div className="flex gap-4 text-gray-700 w-fit m-auto">
      <button 
        className="cursor-pointer bg-gray-100 rounded-full size-8 text-2xl text-center flex items-center justify-center hover:bg-violet-700 hover:text-white">
        <MdKeyboardArrowLeft />
      </button>
      <div className="bg-gray-100 w-fit rounded-full px-3">
        {
          pages.map(page => (
            <button 
              key={page}
              className="rounded-md size-8 cursor-pointer  hover:text-violet-700 hover:font-semibold"
            >{page}</button>
          ))
        }
      </div>

      <button className="cursor-pointer bg-gray-100 rounded-full size-8 text-2xl text-center flex items-center justify-center hover:bg-violet-700 hover:text-white">
      <MdKeyboardArrowRight />
      </button>
    </div>
  )
}

export default Pagination