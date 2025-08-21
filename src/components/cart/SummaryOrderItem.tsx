import Image from "next/image"

const SummaryOrderItem = () => {
  return (
    <div className="flex gap-4 mb-4">
      <div className='w-20 h-20 relative overflow-hidden rounded-lg'>
        <Image 
          src="/images/products/blouse-pink.webp" 
          alt=''
          fill
          sizes='120px'
        />
        <span className="absolute -right-2 -top-2 bg-violet-500 rounded-full px-2 py-1 text-white text-xs text-center">3</span>
      </div>
      <div className='flex flex-1 justify-between items-center '>
        <div className='flex flex-col'>
          <p className='text-base capitalize md:w-full'>method hand sopa lime and sage</p>
          <p className='text-sm text-gray-400 font-light leadiing-4'>
            Color: Cafe <br />
            Talla: XS
          </p>
        </div>
        <span className='font-semibold mr-4'>$4.50</span>
      </div>
    </div>
  )
}

export default SummaryOrderItem