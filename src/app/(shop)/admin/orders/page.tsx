"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiShoppingCart, 
  CiSearch, 
  CiCalendar, 
  CiUser, 
  // CiLocation,
  CiEdit,
  // CiEye
} from 'react-icons/ci';

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('all');

  // Mock data - en una app real esto vendría de una API
  const orders: Order[] = [
    {
      id: '#1234',
      customer: {
        name: 'María García',
        email: 'maria@example.com'
      },
      items: [
        { name: 'Blusa Azul', quantity: 1, price: 89.99 },
        { name: 'Jeans Negros', quantity: 1, price: 129.99 }
      ],
      total: 219.98,
      status: 'delivered',
      paymentStatus: 'paid',
      shippingAddress: 'Calle Principal 123, Ciudad',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-16'
    },
    {
      id: '#1235',
      customer: {
        name: 'Juan Pérez',
        email: 'juan@example.com'
      },
      items: [
        { name: 'Zapatillas Blancas', quantity: 1, price: 79.99 }
      ],
      total: 79.99,
      status: 'processing',
      paymentStatus: 'paid',
      shippingAddress: 'Avenida Central 456, Ciudad',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: '#1236',
      customer: {
        name: 'Ana López',
        email: 'ana@example.com'
      },
      items: [
        { name: 'Vestido Floral', quantity: 1, price: 149.99 },
        { name: 'Reloj Elegante', quantity: 1, price: 299.99 }
      ],
      total: 449.98,
      status: 'shipped',
      paymentStatus: 'paid',
      shippingAddress: 'Plaza Mayor 789, Ciudad',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-15'
    },
    {
      id: '#1237',
      customer: {
        name: 'Carlos Ruiz',
        email: 'carlos@example.com'
      },
      items: [
        { name: 'Mochila Urbana', quantity: 1, price: 159.00 }
      ],
      total: 159.00,
      status: 'pending',
      paymentStatus: 'pending',
      shippingAddress: 'Calle Secundaria 321, Ciudad',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-14'
    }
  ];

  const statuses = [
    { value: 'all', label: 'Todos los estados' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'processing', label: 'Procesando' },
    { value: 'shipped', label: 'Enviado' },
    { value: 'delivered', label: 'Entregado' },
    { value: 'cancelled', label: 'Cancelado' }
  ];

  const paymentStatuses = [
    { value: 'all', label: 'Todos los pagos' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'paid', label: 'Pagado' },
    { value: 'failed', label: 'Fallido' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'processing':
        return 'Procesando';
      case 'shipped':
        return 'Enviado';
      case 'delivered':
        return 'Entregado';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'paid':
        return 'Pagado';
      case 'failed':
        return 'Fallido';
      default:
        return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    const matchesPaymentStatus = selectedPaymentStatus === 'all' || order.paymentStatus === selectedPaymentStatus;
    
    return matchesSearch && matchesStatus && matchesPaymentStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    console.log('Updating order status:', orderId, 'to', newStatus);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Title 
          title="Gestión de Pedidos" 
          subtitle="Administra y rastrea los pedidos de tus clientes"
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por ID, cliente o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>

          {/* Payment Status Filter */}
          <select
            value={selectedPaymentStatus}
            onChange={(e) => setSelectedPaymentStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          >
            {paymentStatuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Order Info */}
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <CiCalendar className="w-4 h-4 mr-1" />
                      {order.createdAt}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                        {getPaymentStatusLabel(order.paymentStatus)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CiUser className="w-4 h-4 mr-1" />
                    {order.customer.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.customer.email}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="flex items-center text-sm text-gray-600">
                  <CiUser className="w-4 h-4 mr-1" />
                  {order.shippingAddress}
                </div>

                {/* Order Items */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Productos:</h4>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="text-gray-900">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 mt-4 lg:mt-0 lg:ml-6">
                <Button
                  label="Ver Detalles"
                  variant="outline"
                  size="sm"
                  onClick={() => console.log('View order:', order.id)}
                />
                <Button
                  label="Actualizar Estado"
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const newStatus = prompt('Nuevo estado (pending, processing, shipped, delivered, cancelled):');
                    if (newStatus) {
                      updateOrderStatus(order.id, newStatus);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <CiShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron pedidos</h3>
          <p className="mt-1 text-sm text-gray-500">
            Intenta ajustar los filtros de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
