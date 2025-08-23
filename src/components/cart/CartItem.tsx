import Image from 'next/image';
import QuantitySelector from '../product/QuantitySelector';
import { IoClose } from 'react-icons/io5';

interface ShoppinCartItemProps {
  name?: string;
  color?: string;
  size?: string;
  quantity?: number;
  price?: number;
  image?: string;
  onRemove?: () => void;
}

const ShoppinCartItem = ({ 
  name = "Method Hand Sopa Lime and Sage",
  color = "Cafe",
  size = "XS",
  quantity = 1,
  price = 4.50,
  image = "/images/products/blouse-pink.webp",
  onRemove
}: ShoppinCartItemProps) => {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl  transition-colors bg-white">
      <div className="w-28 h-28 relative overflow-hidden rounded-lg flex-shrink-0">
        <Image 
          src={image}
          alt={name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start ">
          <h4 className="font-medium text-gray-900 text-md leading-tight">
            {name}
          </h4>
          <button 
            onClick={onRemove}
            className="rounded-full p-1.5 bg-gray-200 hover:bg-gray-300 transition-colors text-gray-600 hover:text-gray-800"
            aria-label="Remove item"
          >
            <IoClose size={16} />
          </button>
        </div>
        
        <p className="text-sm text-gray-500 ">
          {color} • Size {size}
        </p>
        
        <div className="flex justify-between items-center ">
          <QuantitySelector quantity={quantity} />
          <div className="text-right">
            <p className="font-medium text-gray-900 text-sm">${price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Total: ${(price * quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppinCartItem