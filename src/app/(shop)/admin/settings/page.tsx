"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiSettings, 
  CiMail
} from 'react-icons/ci';
import { 
  MdCreditCard,
  MdLocalShipping,
  MdLanguage,
  MdSecurity,
  MdNotifications
} from 'react-icons/md';

interface StoreSettings {
  storeName: string;
  storeDescription: string;
  storeEmail: string;
  storePhone: string;
  storeAddress: string;
  storeCurrency: string;
  storeLanguage: string;
  storeTimezone: string;
}

interface PaymentSettings {
  stripeEnabled: boolean;
  paypalEnabled: boolean;
  cashOnDelivery: boolean;
  bankTransfer: boolean;
}

interface ShippingSettings {
  freeShippingThreshold: number;
  standardShippingCost: number;
  expressShippingCost: number;
  shippingZones: Array<{
    name: string;
    cost: number;
    deliveryTime: string;
  }>;
}

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState(false);

  // Mock data - en una app real esto vendría de una API
  const [storeSettings, setStoreSettings] = useState<StoreSettings>({
    storeName: 'LapakBaju Store',
    storeDescription: 'Tu tienda de moda favorita con las últimas tendencias',
    storeEmail: 'info@lapakbaju.com',
    storePhone: '+1 (555) 123-4567',
    storeAddress: '123 Fashion Street, Style City, SC 12345',
    storeCurrency: 'USD',
    storeLanguage: 'es',
    storeTimezone: 'America/New_York'
  });

  const [paymentSettings, setPaymentSettings] = useState<PaymentSettings>({
    stripeEnabled: true,
    paypalEnabled: true,
    cashOnDelivery: false,
    bankTransfer: true
  });

  const [shippingSettings, setShippingSettings] = useState<ShippingSettings>({
    freeShippingThreshold: 100,
    standardShippingCost: 9.99,
    expressShippingCost: 19.99,
    shippingZones: [
      { name: 'Local', cost: 5.99, deliveryTime: '1-2 días' },
      { name: 'Nacional', cost: 9.99, deliveryTime: '3-5 días' },
      { name: 'Internacional', cost: 24.99, deliveryTime: '7-14 días' }
    ]
  });

  const tabs = [
    { id: 'general', name: 'General', icon: CiSettings },
    { id: 'payment', name: 'Pagos', icon: MdCreditCard },
    { id: 'shipping', name: 'Envíos', icon: MdLocalShipping },
    { id: 'notifications', name: 'Notificaciones', icon: MdNotifications },
    { id: 'security', name: 'Seguridad', icon: MdSecurity }
  ];

  const currencies = [
    { value: 'USD', label: 'Dólar Estadounidense ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'Libra Esterlina (£)' },
    { value: 'MXN', label: 'Peso Mexicano ($)' },
    { value: 'COP', label: 'Peso Colombiano ($)' }
  ];

  const languages = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' },
    { value: 'fr', label: 'Français' }
  ];

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/Madrid', label: 'Madrid Time' },
    { value: 'America/Mexico_City', label: 'Mexico City Time' }
  ];

  const handleSave = () => {
    console.log('Saving settings...');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data here if needed
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Title 
          title="Configuración de la Tienda" 
          subtitle="Personaliza y configura tu tienda online"
        />
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          {isEditing ? (
            <>
              <Button
                label="Cancelar"
                variant="outline"
                size="md"
                onClick={handleCancel}
              />
              <Button
                label="Guardar Cambios"
                variant="primary"
                size="md"
                onClick={handleSave}
              />
            </>
          ) : (
            <Button
              label="Editar Configuración"
              variant="primary"
              size="md"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-violet-500 text-violet-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Información General de la Tienda</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la Tienda
                  </label>
                  <input
                    type="text"
                    value={storeSettings.storeName}
                    onChange={(e) => setStoreSettings({...storeSettings, storeName: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email de Contacto
                  </label>
                  <input
                    type="email"
                    value={storeSettings.storeEmail}
                    onChange={(e) => setStoreSettings({...storeSettings, storeEmail: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={storeSettings.storePhone}
                    onChange={(e) => setStoreSettings({...storeSettings, storePhone: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Moneda
                  </label>
                  <select
                    value={storeSettings.storeCurrency}
                    onChange={(e) => setStoreSettings({...storeSettings, storeCurrency: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.value} value={currency.value}>
                        {currency.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Idioma
                  </label>
                  <select
                    value={storeSettings.storeLanguage}
                    onChange={(e) => setStoreSettings({...storeSettings, storeLanguage: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    {languages.map((language) => (
                      <option key={language.value} value={language.value}>
                        {language.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zona Horaria
                  </label>
                  <select
                    value={storeSettings.storeTimezone}
                    onChange={(e) => setStoreSettings({...storeSettings, storeTimezone: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    {timezones.map((timezone) => (
                      <option key={timezone.value} value={timezone.value}>
                        {timezone.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción de la Tienda
                </label>
                <textarea
                  value={storeSettings.storeDescription}
                  onChange={(e) => setStoreSettings({...storeSettings, storeDescription: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <textarea
                  value={storeSettings.storeAddress}
                  onChange={(e) => setStoreSettings({...storeSettings, storeAddress: e.target.value})}
                  disabled={!isEditing}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
          )}

          {/* Payment Settings */}
          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Configuración de Pagos</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.stripeEnabled}
                      onChange={(e) => setPaymentSettings({...paymentSettings, stripeEnabled: e.target.checked})}
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Stripe</p>
                      <p className="text-sm text-gray-500">Pagos con tarjeta de crédito/débito</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Configurado</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.paypalEnabled}
                      onChange={(e) => setPaymentSettings({...paymentSettings, paypalEnabled: e.target.checked})}
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">PayPal</p>
                      <p className="text-sm text-gray-500">Pagos con PayPal</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Configurado</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.cashOnDelivery}
                      onChange={(e) => setPaymentSettings({...paymentSettings, cashOnDelivery: e.target.checked})}
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Contra Entrega</p>
                      <p className="text-sm text-gray-500">Pago al recibir el pedido</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">No configurado</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.bankTransfer}
                      onChange={(e) => setPaymentSettings({...paymentSettings, bankTransfer: e.target.checked})}
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Transferencia Bancaria</p>
                      <p className="text-sm text-gray-500">Pago por transferencia</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Configurado</span>
                </div>
              </div>
            </div>
          )}

          {/* Shipping Settings */}
          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Configuración de Envíos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Umbral de Envío Gratis
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={shippingSettings.freeShippingThreshold}
                      onChange={(e) => setShippingSettings({...shippingSettings, freeShippingThreshold: parseFloat(e.target.value)})}
                      disabled={!isEditing}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Envío Estándar
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={shippingSettings.standardShippingCost}
                      onChange={(e) => setShippingSettings({...shippingSettings, standardShippingCost: parseFloat(e.target.value)})}
                      disabled={!isEditing}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Envío Express
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={shippingSettings.expressShippingCost}
                      onChange={(e) => setShippingSettings({...shippingSettings, expressShippingCost: parseFloat(e.target.value)})}
                      disabled={!isEditing}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Zonas de Envío</h4>
                <div className="space-y-3">
                  {shippingSettings.shippingZones.map((zone, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                      <input
                        type="text"
                        value={zone.name}
                        onChange={(e) => {
                          const newZones = [...shippingSettings.shippingZones];
                          newZones[index].name = e.target.value;
                          setShippingSettings({...shippingSettings, shippingZones: newZones});
                        }}
                        disabled={!isEditing}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={zone.cost}
                          onChange={(e) => {
                            const newZones = [...shippingSettings.shippingZones];
                            newZones[index].cost = parseFloat(e.target.value);
                            setShippingSettings({...shippingSettings, shippingZones: newZones});
                          }}
                          disabled={!isEditing}
                          className="w-24 pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                      <input
                        type="text"
                        value={zone.deliveryTime}
                        onChange={(e) => {
                          const newZones = [...shippingSettings.shippingZones];
                          newZones[index].deliveryTime = e.target.value;
                          setShippingSettings({...shippingSettings, shippingZones: newZones});
                        }}
                        disabled={!isEditing}
                        placeholder="1-2 días"
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Configuración de Notificaciones</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Nuevos Pedidos</p>
                      <p className="text-sm text-gray-500">Recibir notificación cuando se reciba un nuevo pedido</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Stock Bajo</p>
                      <p className="text-sm text-gray-500">Alertas cuando los productos tengan stock bajo</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled={!isEditing}
                      className="w-4 h-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Reportes Semanales</p>
                      <p className="text-sm text-gray-500">Resumen semanal de ventas y métricas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Configuración de Seguridad</h3>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Autenticación de Dos Factores</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Aumenta la seguridad de tu cuenta activando la autenticación de dos factores.
                  </p>
                  <Button
                    label="Configurar 2FA"
                    variant="outline"
                    size="sm"
                    onClick={() => console.log('Configure 2FA')}
                  />
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Cambiar Contraseña</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Actualiza tu contraseña regularmente para mantener tu cuenta segura.
                  </p>
                  <Button
                    label="Cambiar Contraseña"
                    variant="outline"
                    size="sm"
                    onClick={() => console.log('Change password')}
                  />
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Sesiones Activas</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Revisa y gestiona las sesiones activas de tu cuenta.
                  </p>
                  <Button
                    label="Ver Sesiones"
                    variant="outline"
                    size="sm"
                    onClick={() => console.log('View sessions')}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
