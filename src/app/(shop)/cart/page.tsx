import ShoppinCartItem from "@/components/cart/ShoppinCartItem"
import CheckoutPage from '../checkout/page';

const CartPage = () => {
  return (
    <div className="flex  grow flex-col p-4 lg:flex-row h-full">
      <div className="flex flex-col lg:flex-2/3 mb-5">
        <h1 className="capitalize text-2xl text-gray-800 font-semibold ml-3 mb-3">shopping cart</h1>
        <ShoppinCartItem/>
        <ShoppinCartItem/>
        <ShoppinCartItem/>
      </div>

      

      <div className="mx-4 leading-10 flex flex-col lg:flex-1/3 lg:border-l lg:pl-5 ">
        <h1 className="hidden capitalize text-2xl text-gray-800 font-semibold mb-4 lg:block">Summary</h1>
        <p className="text-xs text-gray-800 flex justify-between">
          <span>subtotal</span>
          <span>$14.50</span>
        </p>
        <p className="text-xs text-gray-300 flex justify-between">
          <span>delivery + handling</span>
          <span>$7.50</span>
        </p>
        <hr className="my-3"/>
        <p className="text-sm text-gray-800 font-black flex justify-between">
          <span>grand total</span>
          <span>$16.50</span>
        </p>

        <button className="font-white bg-violet-700 p-2 rounded-full text-sm mt-5">
          proceed to checkout
        </button>
      </div>


    </div>
  )
}

export default CartPage