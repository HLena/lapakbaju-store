import Image from 'next/image';
import QuantitySelector from '../product/QuantitySelector';
import { IoClose } from 'react-icons/io5';

const ShoppinCartItem = () => {
  return (
    <div className="flex gap-4">
      <div className='w-20 h-20 relative overflow-hidden rounded-lg border'>
        <Image 
          src="/images/products/blouse-pink.webp" 
          alt=''
          fill
          sizes='120px'
        />
      </div>
      <div className='relative grow text-gray-800 text-sm font-semibold md:flex gap-4'>
        <div className='absolute top-0 right-0 rounded-full p-0.5 bg-gray-200 text-xs cursor-pointer'>
          <IoClose/>
        </div>
        <div className='flex flex-col  flex-2'>
          <p className='w-2/3 text-base capitalize md:w-full'>method hand sopa lime and sage</p>
          <p className='text-sm text-gray-400 font-light leadiing-4'>
            Color: Cafe <br />
            Talla: XS
          </p>
        </div>
        <div className='flex justify-between items-center mt-2  flex-2 md:m-0'>
          <QuantitySelector quantity={0}  />
          <span className='font-semibold'>$4.50</span>
        </div>
      </div>
    </div>
  )
}

export default ShoppinCartItem