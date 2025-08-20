const sizes: string[] = [
  "XS",   // Extra Small
  "S",    // Small
  "M",    // Medium
  "L",    // Large
  "XL",   // Extra Large
  "XXL",  // 2 Extra Large
  "XXXL"  // 3 Extra Large
];

const Sizes = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {
        sizes.map(size => (
          <div 
            key={size} 
            className="p-1 cursor-pointer border border-gray-300 rounded-md text-sm text-center text-gray-500 hover:bg-violet-600 hover:text-white min-w-12">
            {size}
          </div>
        ))
      }
    </div>
  )
}

export default Sizes