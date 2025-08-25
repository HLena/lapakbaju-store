import { Title } from '@/components';
import { 
  CiShoppingCart, 
  CiUser
} from 'react-icons/ci';
import { 
  MdAttachMoney,
  MdTrendingUp,
  MdTrendingDown,
  MdBarChart,
  MdInventory
} from 'react-icons/md';

const DashboardPage = () => {
  // Mock data - en una app real esto vendría de una API
  const stats = [
    {
      name: 'Ventas Totales',
      value: '$24,567',
      change: '+12.5%',
      changeType: 'increase',
      icon: MdAttachMoney,
      color: 'bg-green-500'
    },
    {
      name: 'Productos',
      value: '156',
      change: '+3.2%',
      changeType: 'increase',
      icon: MdInventory,
      color: 'bg-blue-500'
    },
    {
      name: 'Pedidos',
      value: '89',
      change: '+8.1%',
      changeType: 'increase',
      icon: CiShoppingCart,
      color: 'bg-violet-500'
    },
    {
      name: 'Usuarios',
      value: '1,234',
      change: '+2.4%',
      changeType: 'increase',
      icon: CiUser,
      color: 'bg-orange-500'
    }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'María García', amount: '$89.99', status: 'Completado', date: '2024-01-15' },
    { id: '#1235', customer: 'Juan Pérez', amount: '$156.50', status: 'Procesando', date: '2024-01-15' },
    { id: '#1236', customer: 'Ana López', amount: '$67.25', status: 'Enviado', date: '2024-01-14' },
    { id: '#1237', customer: 'Carlos Ruiz', amount: '$234.00', status: 'Pendiente', date: '2024-01-14' }
  ];

  const topProducts = [
    { name: 'Blusa Azul', sales: 45, revenue: '$2,025' },
    { name: 'Jeans Negros', sales: 38, revenue: '$1,710' },
    { name: 'Zapatillas Blancas', sales: 32, revenue: '$1,280' },
    { name: 'Vestido Floral', sales: 28, revenue: '$1,120' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Title 
          title="Dashboard" 
          subtitle="Resumen general de tu tienda"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === 'increase' ? (
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                                  <MdTrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pedidos Recientes</h3>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{order.id}</p>
                  <p className="text-xs text-gray-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.status === 'Completado' ? 'bg-green-100 text-green-800' :
                    order.status === 'Procesando' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Enviado' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">
              Ver todos los pedidos →
            </button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos Más Vendidos</h3>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                  <p className="text-xs text-gray-500">{product.sales} ventas</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">
              Ver todos los productos →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:bg-violet-50 transition-colors text-left">
            <MdInventory className="w-8 h-8 text-violet-600 mb-2" />
            <p className="font-medium text-gray-900">Agregar Producto</p>
            <p className="text-sm text-gray-500">Crear nuevo producto</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:bg-violet-50 transition-colors text-left">
            <CiShoppingCart className="w-8 h-8 text-violet-600 mb-2" />
            <p className="font-medium text-gray-900">Ver Pedidos</p>
            <p className="text-sm text-gray-500">Gestionar pedidos</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:bg-violet-50 transition-colors text-left">
            <CiUser className="w-8 h-8 text-violet-600 mb-2" />
            <p className="font-medium text-gray-900">Usuarios</p>
            <p className="text-sm text-gray-500">Gestionar usuarios</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:bg-violet-50 transition-colors text-left">
            <MdBarChart className="w-8 h-8 text-violet-600 mb-2" />
            <p className="font-medium text-gray-900">Reportes</p>
            <p className="text-sm text-gray-500">Ver analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;