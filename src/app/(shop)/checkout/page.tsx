"use client";

import { useState, ChangeEvent } from 'react';
import { Button, Select, Subtitle, SummaryOrder, Textbox } from '@/components';
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

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (

    <div className="px-4 w-full flex flex-col gap-4 justify-center text-left text-gray-800  md:flex-row">
      
      <div className='md:p-4 flex-1/2'>
        <div className='flex justify-between'>
          <Subtitle title="Address"/>
          <Link href="/auth/login">
            <p className='text-violet-600 underline-offset-2'>Log in</p>
          </Link>
        </div>

        <Textbox name='email' label='Email' value={form.email} onChange={onChangeInput}/>

        <Subtitle title="Shipping"/>
        <div className="felx sm:gap-5 sm:grid-cols-2">
          <Textbox name='name' label='Name' value={form.name} onChange={onChangeInput}/>
          <Textbox name='lastname' label='Lastname' value={form.lastname} onChange={onChangeInput}/>
          <Textbox name='address' label='Address' value={form.address} onChange={onChangeInput}/>
          <Textbox name='addressOptional' label='Address 2 (Opcional)' value={form.addressOptional} onChange={onChangeInput}/>
          <Textbox name='postalcode' label='Postal Code' value={form.postalcode} onChange={onChangeInput}/>
          <Textbox name='city' label='City' value={form.city} onChange={onChangeInput}/>
          <Select 
            name='country'
            label="country"
            value={form.country}
            onChange={onChangeSelect}
            options={[
              { value: "pe", label: "Perú" },
              { value: "mx", label: "México" },
              { value: "ar", label: "Argentina" },
            ]}
        />
          <Textbox name='phoneNumber' label='Phone number' value={form.phoneNumber} onChange={onChangeInput} />


        </div>
        <Subtitle title="Payment"/>

        <p className='mb-4 text-sm'>Todas las transacciones son seguras y están encriptadas.</p>
      </div>
      <div className='flex-1/2 md:p-4 md:bg-gray-50 rounded-lg  h-fit'>

        <SummaryOrder/>

        <Button label="Pay Now" type='link' href='/account/orders/5345234353453'/>
      </div>

    </div>

  );
}