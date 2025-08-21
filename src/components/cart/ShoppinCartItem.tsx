import Image from 'next/image';
import QuantitySelector from '../product/QuantitySelector';
import { IoClose } from 'react-icons/io5';

const ShoppinCartItem = () => {
  return (
    <>
      <div className="flex py-2 mx-4 rounded-md gap-4">
        <div className='w-20 h-20 relative overflow-hidden rounded-lg border'>
          <Image 
            src="/images/products/blouse-pink.webp" 
            alt=''
            fill
            sizes='120px'
          />
        </div>
        <div className='relative grow text-gray-800 text-sm font-semibold'>
          <div className='absolute top-0 right-0 rounded-full p-0.5 bg-gray-200 text-xs cursor-pointer'>
            <IoClose/>
          </div>
          <p className='mb-2 md:text-lg'>method hand sopa lime and sage</p>
          <div className='flex justify-between items-center'>
            <QuantitySelector/>
            <span className='font-semibold'>$4.50</span>
          </div>
        </div>
      </div>
      <hr className='m-5'/>
    </>
  )
}

export default ShoppinCartItem