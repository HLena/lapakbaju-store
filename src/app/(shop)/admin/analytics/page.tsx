"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiShoppingCart, 
  CiUser
} from 'react-icons/ci';
import { 
  MdTrendingUp,
  MdTrendingDown,
  MdAttachMoney,
  MdInventory,
} from 'react-icons/md';

interface SalesData {
  date: string;
  sales: number;
  orders: number;
  customers: number;
}

interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
  growth: number;
}

interface CustomerSegment {
  segment: string;
  count: number;
  percentage: number;
  revenue: number;
}

const AnalyticsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Mock data - en una app real esto vendría de una API
  const salesData: SalesData[] = [
    { date: '2024-01-10', sales: 1250, orders: 15, customers: 12 },
    { date: '2024-01-11', sales: 1890, orders: 22, customers: 18 },
    { date: '2024-01-12', sales: 2100, orders: 25, customers: 20 },
    { date: '2024-01-13', sales: 1680, orders: 19, customers: 16 },
    { date: '2024-01-14', sales: 2340, orders: 28, customers: 24 },
    { date: '2024-01-15', sales: 1950, orders: 23, customers: 19 }
  ];

  const topProducts: TopProduct[] = [
    { name: 'Blusa Azul', sales: 45, revenue: 2025, growth: 12.5 },
    { name: 'Jeans Negros', sales: 38, revenue: 1710, growth: 8.2 },
    { name: 'Zapatillas Blancas', sales: 32, revenue: 1280, growth: -3.1 },
    { name: 'Vestido Floral', sales: 28, revenue: 1120, growth: 15.7 },
    { name: 'Reloj Elegante', sales: 25, revenue: 2500, growth: 22.3 }
  ];

  const customerSegments: CustomerSegment[] = [
    { segment: 'Nuevos', count: 45, percentage: 35, revenue: 3200 },
    { segment: 'Recurrentes', count: 58, percentage: 45, revenue: 8900 },
    { segment: 'VIP', count: 25, percentage: 20, revenue: 15600 }
  ];

  const periods = [
    { value: '7', label: 'Últimos 7 días' },
    { value: '30', label: 'Últimos 30 días' },
    { value: '90', label: 'Últimos 90 días' },
    { value: '365', label: 'Último año' }
  ];

  const totalSales = salesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const totalCustomers = salesData.reduce((sum, day) => sum + day.customers, 0);
  const averageOrderValue = totalSales / totalOrders;

  const previousPeriodSales = 18500; // Mock data
  const salesGrowth = ((totalSales - previousPeriodSales) / previousPeriodSales) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Title 
          title="Analytics y Reportes" 
          subtitle="Métricas y análisis de rendimiento de tu tienda"
        />
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          >
            {periods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <Button
            label="Exportar Reporte"
            variant="outline"
            size="md"
            onClick={() => console.log('Export report clicked')}
          />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ventas Totales</p>
              <p className="text-2xl font-bold text-gray-900">${totalSales.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
                              <MdAttachMoney className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {salesGrowth >= 0 ? (
                              <MdTrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
                              <MdTrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              salesGrowth >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {salesGrowth >= 0 ? '+' : ''}{salesGrowth.toFixed(1)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">vs período anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pedidos</p>
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
            </div>
            <div className="p-3 rounded-lg bg-violet-500">
              <CiShoppingCart className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Promedio: ${averageOrderValue.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Clientes Únicos</p>
              <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500">
              <CiUser className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Nuevos: {customerSegments[0].count}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Productos Vendidos</p>
              <p className="text-2xl font-bold text-gray-900">
                {topProducts.reduce((sum, product) => sum + product.sales, 0)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-orange-500">
                              <MdInventory className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Top: {topProducts[0].name}
            </p>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendencia de Ventas</h3>
        <div className="space-y-4">
          {salesData.map((day, index) => (
            <div key={day.date} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(day.date).toLocaleDateString('es-ES', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-xs text-gray-500">
                    {day.orders} pedidos, {day.customers} clientes
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">${day.sales.toLocaleString()}</p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-violet-600 h-2 rounded-full" 
                    style={{ width: `${(day.sales / Math.max(...salesData.map(d => d.sales))) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products and Customer Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos Más Vendidos</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} ventas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
                  <div className="flex items-center">
                    {product.growth >= 0 ? (
                      <MdTrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    ) : (
                                              <MdTrendingDown className="w-3 h-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs ${
                      product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Segments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Segmentos de Clientes</h3>
          <div className="space-y-4">
            {customerSegments.map((segment) => (
              <div key={segment.segment} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{segment.segment}</span>
                  <span className="text-sm text-gray-500">{segment.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-violet-600 h-2 rounded-full" 
                    style={{ width: `${segment.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{segment.count} clientes</span>
                  <span>${segment.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights de Rendimiento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Mejor día:</strong> {salesData.reduce((max, day) => 
                  day.sales > max.sales ? day : max
                ).date} - ${Math.max(...salesData.map(d => d.sales)).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Producto estrella:</strong> {topProducts[0].name} con {topProducts[0].sales} ventas
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Segmento principal:</strong> {customerSegments[1].segment} ({customerSegments[1].percentage}%)
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Valor promedio por pedido:</strong> ${averageOrderValue.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Crecimiento de ventas:</strong> {salesGrowth >= 0 ? '+' : ''}{salesGrowth.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">
                <strong>Clientes únicos:</strong> {totalCustomers} en {selectedPeriod} días
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
