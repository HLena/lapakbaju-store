import { getOrderStateColor, getPaymentStateColor } from "@/app/utils/ordesStates";
import { Order } from "@/interfaces";
import Link from "next/link";
import Button from "../ui/form/Button";


const OrderCard = ({ order }: { order: Order }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
    <div className="flex justify-between items-start mb-3">
      <div className="font-medium text-gray-900">
      <Link href={`/account/orders/${order.id}`}>#{order.id}</Link>
      </div>
      <div className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</div>
    </div>
    
    <div className="space-y-2 text-sm mb-4">
      <div className="flex justify-between">
        <span className="text-gray-500">Date:</span>
        <span className="text-gray-900">{order.date}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-500">Payment:</span>
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStateColor(order.paymentState)}`}>
          {order.paymentState}
        </span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-500">Status:</span>
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOrderStateColor(order.orderState)}`}>
          {order.orderState}
        </span>
      </div>
    </div>
    <Button label="View Order" type="link" href={`/account/orders/${order.id}`} className="mb-0"/>
  </div>
);

export default OrderCard