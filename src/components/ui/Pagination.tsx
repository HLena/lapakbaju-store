'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProp{
  totalPages: number,
  currentPage: number,
}
const Pagination = ({totalPages, currentPage }: PaginationProp) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  const [page, setPage] = useState(currentPage)
  
  const getPageRange = (currentPage: number, totalPages: number) => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    console.log("pathname", pathname)
    
    if (end === totalPages) {
      start = Math.max(1, end - 4);
    }
    
    return { start, end };
  };
  
  const [pageRange, setPageRange] = useState(getPageRange(currentPage, totalPages));

  const onChangePage = (amount: number) => {
    const newPage = page + amount;
    
    if ((amount > 0 && page < totalPages) || (amount < 0 && page > 1)) {
      setPage(newPage);
      setPageRange(getPageRange(newPage, totalPages));
    }
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
    setPageRange(getPageRange(pageNumber, totalPages));
  };

  const createPageUrl = (currentPage: number) => {
    return `${pathname}/?page=${currentPage}`;
  }

  return (
    <div className="flex gap-4 text-gray-600 w-fit">
      <Link 
        href={createPageUrl(page - 1)}
        onClick={() => onChangePage(-1)}
        className={(
          clsx(
            "cursor-pointer bg-gray-100 rounded-full size-8 text-2xl text-center flex items-center justify-center",
            page !== 1 ? "hover:bg-violet-700 hover:text-white" : "text-gray-400"
          )
        )}>
        <MdKeyboardArrowLeft />
      </Link>
      <div className="bg-gray-100 w-fit rounded-full px-3">
        {
          pages.map(pageNumber => {
            if (pageRange.start <= pageNumber && pageNumber <= pageRange.end) {
              return (
                <Link key={pageNumber} href={createPageUrl(pageNumber)}>
                  <button 
                    onClick={() => goToPage(pageNumber)}
                    className={(
                      clsx(
                        "rounded-md size-8 cursor-pointer hover:text-violet-700 hover:font-semibold",
                        page === pageNumber && "bg-violet-600 text-white hover:text-white shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                      )
                    )}
                  >
                    {pageNumber}
                  </button>
                </Link>
              )
            }
            return null;
          })
        }
      </div>

      <Link
        onClick={() => onChangePage(1)}
        href={createPageUrl(page + 1)}
        className={(
          clsx(
            "cursor-pointer bg-gray-100 rounded-full size-8 text-2xl text-center flex items-center justify-center",
            page !== totalPages ? "hover:bg-violet-700 hover:text-white" : "text-gray-400"
          )
        )}>
        <MdKeyboardArrowRight />
      </Link>
    </div>
  )
}

export default Pagination