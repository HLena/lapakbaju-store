import { Category } from '@/config/categories';
import Image from 'next/image';
import Link from 'next/link';

interface Props{
  options: Category[],
}

const NavbarMenu = ({options}: Props) => {
  return (
    <nav className='w-full absolute flex flex-col left-0 top-0 bg-white  max-w-80 lg:hidden'>
      <div className='flex gap-2  w-fit m-auto my-5'>
        <Image src={"/images/logo-violet.png"} alt="logo" height={40} width={40}/>
        <span className='text-violet-600 text-3xl'>Borcelle</span>
      </div>
      {
        options.map((option, i) => (
          <Link 
            key={option.slug} 
            href={`/category/${option.slug}`}
            className='text-center py-2 capitalize text-gray-700'
          >
            {option.name}
          </Link>
        ))
      }
    </nav>
  )
}

export default NavbarMenu