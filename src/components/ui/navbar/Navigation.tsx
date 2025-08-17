import Link from "next/link"

interface Props{
  menu: {
    name: string,
    path: string
  }[]
}

const Navigation = ({menu}: Props) => {
  return (
    <nav className='flex-row capitalize hidden md:flex'>
        {
          menu.map((m, i) => (
            <Link 
              key={i}
              href={m.path}
              className="p-2 text-gray-500 cursor-pointer hover:font-semibold"
            >{m.name}
            </Link>
          ))
        }
    </nav>
  )
}

export default Navigation