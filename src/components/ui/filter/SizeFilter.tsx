const sizes: string[] = [
  "XS",   // Extra Small
  "S",    // Small
  "M",    // Medium
  "L",    // Large
  "XL",   // Extra Large
  "XXL",  // 2 Extra Large
  "XXXL"  // 3 Extra Large
];

const SizeFilter = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {
        sizes.map(size => (
          <div 
            key={size} 
            className="p-1 cursor-pointer border border-gray-300 rounded-md text-sm text-center hover:bg-violet-600 hover:text-white">
            {size}
          </div>
        ))
      }
    </div>
  )
}

export default SizeFilter