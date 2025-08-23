"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { Title, Button, Textbox } from "@/components";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement registration logic
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <Title 
              title="Create Account" 
              subtitle="Join LapakBaju and start your fashion journey"
              className="text-center"
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Textbox
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            
            <Textbox
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <Textbox
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            
            <Textbox
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            
            <Button
              label="Create Account"
              type="button"
              variant="primary"
              size="sm"
              className="w-full"
            />
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/auth/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
              >
                Sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;