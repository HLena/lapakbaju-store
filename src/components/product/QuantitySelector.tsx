
const  QuantitySelector = () => {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-full">
      <button className="flex justify-center items-center font-semibold p-2 size-8  rounded-full text-gray-300 text-xl cursor-pointer" >-</button>
      <span className="text-gray-700 font-semibold text-md">0</span>
      <button className="flex justify-center items-center font-semibold p-2 size-8  rounded-full text-gray-300 text-xl cursor-pointer">+</button>

    </div>
  )
}

export default QuantitySelector