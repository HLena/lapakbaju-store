import ShoppinCartItem from "@/components/cart/ShoppinCartItem"
import Subtitle from "@/components/cart/Subtitle"
import Link from "next/link"

const CartPage = () => {
  return (
    <div className="flex flex-col grow px-4 my-4 gap-6 lg:flex-row md:px-10">

        <div className="flex flex-col lg:flex-2/3 gap-4 ">
          <Subtitle title="shopping cart"/>
          <ShoppinCartItem/>
          <ShoppinCartItem/>
          <ShoppinCartItem/>
        </div>

      <div className="border p-4 flex flex-col lg:flex-1/3  rounded-md">
        <p className="text-gray-800 flex justify-between">
          <span className="text-md">Total</span>
          <span className="text-xl font-black">$14.50</span>
        </p>
        
        <hr className="my-4"/>
        <p className="text-sm text-gray-400 font-light flex justify-between">
        Impuesto incluido. Los gastos de envío se calculan en la pantalla de pago.
        </p>

        <Link href="/checkout" className="text-white text-center capitalize bg-violet-700 p-2 rounded-full text-sm mt-4">
          proceed to checkout
        </Link>
      </div>


    </div>
  )
}

export default CartPage