"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiSearch, 
  CiFilter, 
  CiEdit, 
  CiTrash, 
  CiCirclePlus
} from 'react-icons/ci';
import { 
  MdInventory,
  MdVisibility
} from 'react-icons/md';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  image: string;
  createdAt: string;
}

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data - en una app real esto vendría de una API
  const products: Product[] = [
    {
      id: '1',
      name: 'Blusa Azul Elegante',
      category: 'women',
      price: 89.99,
      stock: 45,
      status: 'active',
      image: '/images/products/blouse-blue.webp',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jeans Negros Clásicos',
      category: 'men',
      price: 129.99,
      stock: 32,
      status: 'active',
      image: '/images/products/jeans-black.webp',
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      name: 'Zapatillas Blancas Deportivas',
      category: 'shoes',
      price: 79.99,
      stock: 0,
      status: 'out_of_stock',
      image: '/images/products/shoes-white.webp',
      createdAt: '2024-01-13'
    },
    {
      id: '4',
      name: 'Vestido Floral Veraniego',
      category: 'women',
      price: 149.99,
      stock: 18,
      status: 'active',
      image: '/images/products/dress-floral.webp',
      createdAt: '2024-01-12'
    },
    {
      id: '5',
      name: 'Reloj Elegante Minimalista',
      category: 'accessories',
      price: 299.99,
      stock: 12,
      status: 'active',
      image: '/images/products/watch-minimal.webp',
      createdAt: '2024-01-11'
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'women', label: 'Mujeres' },
    { value: 'men', label: 'Hombres' },
    { value: 'shoes', label: 'Zapatos' },
    { value: 'accessories', label: 'Accesorios' },
    { value: 'bags', label: 'Bolsos' },
    { value: 'jewelry', label: 'Joyería' }
  ];

  const statuses = [
    { value: 'all', label: 'Todos los estados' },
    { value: 'active', label: 'Activo' },
    { value: 'inactive', label: 'Inactivo' },
    { value: 'out_of_stock', label: 'Sin stock' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'out_of_stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'inactive':
        return 'Inactivo';
      case 'out_of_stock':
        return 'Sin stock';
      default:
        return status;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Title 
          title="Gestión de Productos" 
          subtitle="Administra tu catálogo de productos"
        />
        <Button
          label="Agregar Producto"
          variant="primary"
          size="md"
          className="mt-4 sm:mt-0"
          onClick={() => console.log('Add product clicked')}
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
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

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
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Productos ({filteredProducts.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900 capitalize">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">${product.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      product.stock === 0 ? 'text-red-600' : 
                      product.stock < 10 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                      {getStatusLabel(product.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-violet-600 hover:text-violet-900 p-1">
                        <MdVisibility className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 p-1">
                        <CiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1">
                        <CiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
                          <MdInventory className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron productos</h3>
          <p className="mt-1 text-sm text-gray-500">
            Intenta ajustar los filtros o agregar un nuevo producto.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
