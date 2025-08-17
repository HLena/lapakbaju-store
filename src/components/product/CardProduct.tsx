import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";


const CardProduct = ({name, url, price, id}: Product) => {
  return (
    <Link href={`/product/${id}`}>
      <div className='flex-1 bg-white rounded-xl border shadow-md'>
        <div className='flex justify-center bg-gray-100 rounded-t-xl'>
          <Image src="/images/products/black-jacket.webp" alt='black-jacket' width={200} height={200}/>
        </div>
        <div className='p-3'>
          <p className='text-gray-600 font-semibold text-sm capitalize'>{name}</p>
          <div className='flex justify-between items-center'>
            <p className='flex flex-col leading-3'>
              <small className='text-gray-400 text-xs'>Price</small>
              <span className='text-gray-600 font-bold text-sm'>{price}$</span>
            </p>
            <button className='bg-violet-700 text-white size-8 rounded-md border-none outline-none p-2'>
              <LuShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardProduct