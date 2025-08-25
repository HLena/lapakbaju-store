"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiBoxes, 
  CiSearch, 
  CiEdit,
  CiCirclePlus
} from 'react-icons/ci';
import { 
  MdWarning,
  MdTrendingUp,
  MdTrendingDown
} from 'react-icons/md';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unitCost: number;
  totalValue: number;
  lastUpdated: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstock';
}

interface StockMovement {
  id: string;
  productName: string;
  type: 'in' | 'out' | 'adjustment';
  quantity: number;
  reason: string;
  date: string;
  user: string;
}

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data - en una app real esto vendría de una API
  const inventory: InventoryItem[] = [
    {
      id: '1',
      name: 'Blusa Azul Elegante',
      sku: 'BLU-001',
      category: 'women',
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      unitCost: 25.00,
      totalValue: 1125.00,
      lastUpdated: '2024-01-15',
      status: 'in_stock'
    },
    {
      id: '2',
      name: 'Jeans Negros Clásicos',
      sku: 'JEA-002',
      category: 'men',
      currentStock: 8,
      minStock: 15,
      maxStock: 80,
      unitCost: 45.00,
      totalValue: 360.00,
      lastUpdated: '2024-01-15',
      status: 'low_stock'
    },
    {
      id: '3',
      name: 'Zapatillas Blancas Deportivas',
      sku: 'ZAP-003',
      category: 'shoes',
      currentStock: 0,
      minStock: 5,
      maxStock: 50,
      unitCost: 35.00,
      totalValue: 0.00,
      lastUpdated: '2024-01-14',
      status: 'out_of_stock'
    },
    {
      id: '4',
      name: 'Vestido Floral Veraniego',
      sku: 'VES-004',
      category: 'women',
      currentStock: 120,
      minStock: 20,
      maxStock: 100,
      unitCost: 60.00,
      totalValue: 7200.00,
      lastUpdated: '2024-01-15',
      status: 'overstock'
    }
  ];

  const stockMovements: StockMovement[] = [
    {
      id: '1',
      productName: 'Blusa Azul Elegante',
      type: 'in',
      quantity: 50,
      reason: 'Compra de proveedor',
      date: '2024-01-15',
      user: 'Admin'
    },
    {
      id: '2',
      productName: 'Jeans Negros Clásicos',
      type: 'out',
      quantity: 12,
      reason: 'Venta',
      date: '2024-01-15',
      user: 'Sistema'
    },
    {
      id: '3',
      productName: 'Zapatillas Blancas Deportivas',
      type: 'adjustment',
      quantity: -5,
      reason: 'Dañado en almacén',
      date: '2024-01-14',
      user: 'Admin'
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'women', label: 'Mujeres' },
    { value: 'men', label: 'Hombres' },
    { value: 'shoes', label: 'Zapatos' },
    { value: 'accessories', label: 'Accesorios' }
  ];

  const statuses = [
    { value: 'all', label: 'Todos los estados' },
    { value: 'in_stock', label: 'En stock' },
    { value: 'low_stock', label: 'Stock bajo' },
    { value: 'out_of_stock', label: 'Sin stock' },
    { value: 'overstock', label: 'Sobre stock' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock':
        return 'bg-green-100 text-green-800';
      case 'low_stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock':
        return 'bg-red-100 text-red-800';
      case 'overstock':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in_stock':
        return 'En stock';
      case 'low_stock':
        return 'Stock bajo';
      case 'out_of_stock':
        return 'Sin stock';
      case 'overstock':
        return 'Sobre stock';
      default:
        return status;
    }
  };

  const getMovementTypeColor = (type: string) => {
    switch (type) {
      case 'in':
        return 'bg-green-100 text-green-800';
      case 'out':
        return 'bg-red-100 text-red-800';
      case 'adjustment':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMovementTypeLabel = (type: string) => {
    switch (type) {
      case 'in':
        return 'Entrada';
      case 'out':
        return 'Salida';
      case 'adjustment':
        return 'Ajuste';
      default:
        return type;
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalInventoryValue = inventory.reduce((sum, item) => sum + item.totalValue, 0);
  const lowStockItems = inventory.filter(item => item.status === 'low_stock').length;
  const outOfStockItems = inventory.filter(item => item.status === 'out_of_stock').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Title 
          title="Gestión de Inventario" 
          subtitle="Controla el stock y valor de tu inventario"
        />
        <Button
          label="Agregar Stock"
          variant="primary"
          size="md"
          className="mt-4 sm:mt-0"
          onClick={() => console.log('Add stock clicked')}
        />
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <CiBoxes className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Productos</p>
              <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
                              <MdTrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Valor Total</p>
              <p className="text-2xl font-bold text-gray-900">${totalInventoryValue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500">
                              <MdWarning className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Stock Bajo</p>
              <p className="text-2xl font-bold text-gray-900">{lowStockItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-red-500">
                              <MdTrendingDown className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Sin Stock</p>
              <p className="text-2xl font-bold text-gray-900">{outOfStockItems}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
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

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Inventario ({filteredInventory.length})
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
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Unitario
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Total
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500 capitalize">{item.category}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.currentStock}</div>
                      <div className="text-xs text-gray-500">
                        Min: {item.minStock} | Max: {item.maxStock}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusLabel(item.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${item.unitCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${item.totalValue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1">
                        <CiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-violet-600 hover:text-violet-900 p-1">
                        <CiCirclePlus className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Movements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Movimientos de Stock</h3>
        <div className="space-y-3">
          {stockMovements.map((movement) => (
            <div key={movement.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-4">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getMovementTypeColor(movement.type)}`}>
                  {getMovementTypeLabel(movement.type)}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{movement.productName}</p>
                  <p className="text-xs text-gray-500">{movement.reason}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  movement.type === 'in' ? 'text-green-600' : 
                  movement.type === 'out' ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {movement.type === 'in' ? '+' : ''}{movement.quantity}
                </p>
                <p className="text-xs text-gray-500">{movement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredInventory.length === 0 && (
        <div className="text-center py-12">
          <CiBoxes className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron productos</h3>
          <p className="mt-1 text-sm text-gray-500">
            Intenta ajustar los filtros de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
