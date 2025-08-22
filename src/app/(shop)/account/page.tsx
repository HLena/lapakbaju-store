"use client";

import { useState } from 'react';
import { OrdersTable, Panel, Subtitle, Title } from '@/components';
import { IoPerson, IoMail, IoCall, IoLocation, IoCalendar, IoCard } from 'react-icons/io5';

interface Customer {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
  totalOrders: number;
  totalSpent: number;
}

interface Address {
  type: 'shipping' | 'billing';
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
}

const AccountPage = () => {
  // Sample customer data
  const customer: Customer = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "January 2023",
    totalOrders: 12,
    totalSpent: 1247.85
  };

  // Sample addresses
  const addresses: Address[] = [
    {
      type: 'shipping',
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      postalCode: "10001",
      country: "United States",
      phone: "+1 (555) 123-4567"
    },
    {
      type: 'billing',
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      postalCode: "10001",
      country: "United States"
    }
  ];

  // Sample order data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      paymentState: "paid" as const,
      orderState: "delivered" as const,
      total: 89.99
    },
    {
      id: "ORD-002", 
      date: "2024-01-20",
      paymentState: "pending" as const,
      orderState: "processing" as const,
      total: 149.50
    },
    {
      id: "ORD-003",
      date: "2024-01-25", 
      paymentState: "paid" as const,
      orderState: "shipped" as const,
      total: 67.25
    }
  ];

  return (
    <div className="min-h-screen m-auto">
      <div className="max-w-7xl mx-auto sm:px-6 ">
        {/* Header */}
        <div className="mb-8">
          <Title title="My Account" />
          <p className="text-gray-600 mt-2">Welcome back, {customer.name}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Customer Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Customer Profile Card */}
            <Panel>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                  <IoPerson className="w-8 h-8 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-500">Member since {customer.memberSince}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <IoMail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{customer.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <IoCall className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{customer.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <IoCalendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{customer.totalOrders} orders</span>
                </div>
              </div>
            </Panel>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Panel>
                <div className="text-2xl font-bold text-violet-600">{customer.totalOrders}</div>
                <div className="text-sm text-gray-500">Total Orders</div>
              </Panel>
              <Panel>
                <div className="text-2xl font-bold text-green-600">${customer.totalSpent.toFixed(2)}</div>
                <div className="text-sm text-gray-500">Total Spent</div>
              </Panel>
            </div>

            {/* Quick Actions */}
            <Panel>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-violet-600">
                  <IoCard className="inline w-4 h-4 mr-2" />
                  Update Payment Method
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-violet-600">
                  <IoLocation className="inline w-4 h-4 mr-2" />
                  Manage Addresses
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-violet-600">
                  <IoPerson className="inline w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </Panel>
          </div>

          {/* Right Column - Orders & Addresses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Orders Section */}
            <Panel>
              <div className="flex items-center justify-between mb-6">
                <Subtitle title="Recent Orders" />
                <button className="text-violet-600 hover:text-violet-700 text-sm font-medium">
                  View All Orders
                </button>
              </div>
              <OrdersTable orders={orders} />
            </Panel>

            {/* Addresses Section */}
            <Panel>
              <div className="flex items-center justify-between mb-6">
                <Subtitle title="Addresses" />
                <button className="text-violet-600 hover:text-violet-700 text-sm font-medium">
                  Add New Address
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        address.type === 'shipping' 
                          ? 'text-blue-600 bg-blue-100' 
                          : 'text-green-600 bg-green-100'
                      }`}>
                        {address.type.charAt(0).toUpperCase() + address.type.slice(1)}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600 text-sm">
                        Edit
                      </button>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <p className="font-medium text-gray-900">{address.name}</p>
                      <p className="text-gray-600">{address.address}</p>
                      <p className="text-gray-600">{address.city}, {address.postalCode}</p>
                      <p className="text-gray-600">{address.country}</p>
                      {address.phone && (
                        <p className="text-gray-600">{address.phone}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;