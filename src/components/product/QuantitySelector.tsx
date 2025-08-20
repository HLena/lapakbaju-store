
const QuantitySelector = () => {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-full">
      <button className="flex justify-center items-center font-semibold p-3 size-10  rounded-full text-gray-700 text-xl cursor-pointer" >-</button>
      <span className="mx-2 text-gray-700 font-semibold text-md">0</span>
      <button className="flex justify-center items-center font-semibold p-3 size-10  rounded-full text-gray-700 text-xl cursor-pointer">+</button>

    </div>
  )
}

export default QuantitySelector