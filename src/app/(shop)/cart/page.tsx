import { Panel } from "@/components"
import ShoppinCartItem from "@/components/cart/CartItem"
import Subtitle from "@/components/cart/Subtitle"
import Link from "next/link"

const CartPage = () => {
  return (
    <div className="min-h-screen m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Subtitle title="Shopping Cart" />
          <p className="text-gray-600 mt-2">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Main Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"> */}
              <ShoppinCartItem/>
              <ShoppinCartItem/>
              <ShoppinCartItem/>
            {/* </div> */}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Panel>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">$14.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">Free</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-violet-600">$14.50</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4 text-center">
                Impuesto incluido. Los gastos de envío se calculan en la pantalla de pago.
              </p>

              <Link 
                href="/checkout" 
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-violet-600 hover:bg-violet-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage