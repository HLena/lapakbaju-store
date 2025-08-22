
import { getOrderStateColor, getPaymentStateColor } from '@/app/utils/ordesStates';
import { Button, Panel, Subtitle, Title } from '@/components';
import SummaryOrderItem from '@/components/cart/OrderItem';
import Link from 'next/link';

interface OrderItem {
  id: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderDetails {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'failed';
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
  };
  billingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  // Mock data - in real app this would come from API
  const paramsResponse = await params;
  const order: OrderDetails = {
    id: paramsResponse.orderId,
    date: "2024-01-15",
    status: "shipped",
    paymentStatus: "paid",
    total: 89.99,
    subtotal: 79.99,
    shipping: 5.99,
    tax: 4.01,
    items: [
      {
        id: "1",
        name: "Classic White T-Shirt",
        size: "M",
        color: "White",
        quantity: 2,
        price: 29.99,
        image: "/images/products/tshirt-white.jpg"
      },
      {
        id: "2",
        name: "Denim Jeans",
        size: "32",
        color: "Blue",
        quantity: 1,
        price: 19.99,
        image: "/images/products/jeans-blue.jpg"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "USA",
      phone: "+1-555-0123"
    },
    billingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "USA"
    }
  };

  return (
    <div className="min-h-screen  py-8 m-auto">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Title title={`Order #${order.id}`} />
            <p className="text-gray-600 mt-2">Placed on {order.date}</p>
          </div>
          <Link href="/account">
            <Button label="Back to Orders" type="button" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Panel>
              <Subtitle title="Order Status" />
              <div className="mt-4 flex items-center gap-4">
                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getOrderStateColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getPaymentStateColor(order.paymentStatus)}`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </span>
              </div>
            </Panel>

            <Panel>
              <Subtitle title="Order Items" />
              <div className="mt-4 space-y-4">
                {order.items.map((item) => (
                  <SummaryOrderItem key={item.id}/>
                ))}
              </div>
            </Panel>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Panel>
                <Subtitle title="Shipping Address" />
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                  <p>{order.shippingAddress.country}</p>
                  <p className="mt-2">{order.shippingAddress.phone}</p>
                </div>
              </Panel>

              <Panel>
                <Subtitle title="Billing Address" />
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-900">{order.billingAddress.name}</p>
                  <p>{order.billingAddress.address}</p>
                  <p>{order.billingAddress.city}, {order.billingAddress.postalCode}</p>
                  <p>{order.billingAddress.country}</p>
                </div>
              </Panel>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Panel>
              <Subtitle title="Order Summary" />
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${order.tax.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </Panel>

            {/* Actions */}
            <Panel>
              <Subtitle title="Actions" />
              <div className="mt-4 space-y-3">
                <Button label="Download Invoice" type="button" className="w-full" />
                <Button label="Track Package" type="button" className="w-full bg-blue-600 hover:bg-blue-700" />
                <Button label="Contact Support" type="button" className="w-full bg-gray-600 hover:bg-gray-700" />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
