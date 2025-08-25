import { Category } from "@/config/categories"
import Link from "next/link"

interface NavigationProps{
  options: Category []
}

const Navigation = ({ options }: NavigationProps) => {
  return (
    <nav className='capitalize hidden lg:flex lg:flex-row '>
        {
          options.map((option, i) => (
            <Link 
              key={option.slug}
              href={`/category/${option.slug}`}
              className="p-2 text-gray-600 cursor-pointer hover:font-semibold"
            >{option.name}
            </Link>
          ))
        }
    </nav>
  )
}

export default Navigation