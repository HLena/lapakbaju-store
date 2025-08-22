"use client";

import { useState, ChangeEvent } from 'react';
import { Button, Panel, Select, Subtitle, SummaryOrder, Textbox } from '@/components';
import Link from 'next/link';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    lastname: '',
    address: '',
    addressOptional: '',
    postalcode: '',
    city: '',
    phoneNumber: '',
    country: ''
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Address Section */}
            <Panel>
              <div className="flex justify-between items-center">
                <Subtitle title="Address" />
                <Link href="/auth/login" className="text-violet-600 hover:text-violet-700 text-sm font-medium underline">
                  Log in
                </Link>
              </div>
              
              <Textbox name='email' label='Email' type="email" value={form.email} onChange={onChangeInput}/>
            </Panel>

            {/* Shipping Section */}
            <Panel>
              <Subtitle title="Shipping" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Textbox name='name' label='Name' value={form.name} onChange={onChangeInput}/>
                <Textbox name='lastname' label='Lastname' value={form.lastname} onChange={onChangeInput}/>
                <Textbox name='address' label='Address' value={form.address} onChange={onChangeInput} className="sm:col-span-2"/>
                <Textbox name='addressOptional' label='Address 2 (Opcional)' value={form.addressOptional} onChange={onChangeInput} className="sm:col-span-2"/>
                <Textbox name='postalcode' label='Postal Code' value={form.postalcode} onChange={onChangeInput}/>
                <Textbox name='city' label='City' value={form.city} onChange={onChangeInput}/>
                <Select 
                  name='country'
                  label="Country"
                  value={form.country}
                  onChange={onChangeInput}
                  options={[
                    { value: "pe", label: "Perú" },
                    { value: "mx", label: "México" },
                    { value: "ar", label: "Argentina" },
                  ]}
                />
                <Textbox name='phoneNumber' label='Phone number' value={form.phoneNumber} onChange={onChangeInput} />
              </div>
            </Panel>

            {/* Payment Section */}
            <Panel>
              <Subtitle title="Payment" />
              <p className="text-sm text-gray-600 mt-2">
                Todas las transacciones son seguras y están encriptadas.
              </p>
            </Panel>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
              <SummaryOrder/>
              <div className="mt-6">
                <Button label="Pay Now" type='link' href='/account/orders/5345234353453'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}