import Image from "next/image"

interface SummaryOrderItemProps {
  name?: string;
  color?: string;
  size?: string;
  quantity?: number;
  price?: number;
  image?: string;
}

const SummaryOrderItem = ({ 
  name = "Method Hand Sopa Lime and Sage",
  color = "Cafe",
  size = "XS",
  quantity = 3,
  price = 4.50,
  image = "/images/products/blouse-pink.webp"
}: SummaryOrderItemProps) => {
  return (
    <div className="flex md:items-center gap-4 p-4 border border-gray-200 rounded-lg mb-4 hover:bg-gray-50 transition-colors">
      <div className="w-20 h-20 md:w-16 md:h-16 relative overflow-hidden rounded-lg flex-shrink-0">
        <Image 
          src={image}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">
          {name}
        </h4>
        <p className="text-sm text-gray-500">
          {color} • Size {size} • Qty {quantity}
        </p>
      </div>
      
      <div className="text-right">
        <p className="font-medium text-gray-900 text-sm">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Total: ${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default SummaryOrderItem