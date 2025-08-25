"use client";

import { useState } from 'react';
import { Title, Button } from '@/components';
import { 
  CiGrid41, 
  CiCirclePlus, 
  CiEdit, 
  CiTrash
} from 'react-icons/ci';
import { 
  MdInventory,
  MdImage
} from 'react-icons/md';
import { getAllCategories } from '@/config/categories';

interface CategoryFormData {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

const CategoriesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryFormData | null>(null);
  const [formData, setFormData] = useState<CategoryFormData>({
    slug: '',
    name: '',
    description: '',
    image: '',
    productCount: 0
  });

  const categories = getAllCategories();

  const handleOpenModal = (category?: CategoryFormData) => {
    if (category) {
      setEditingCategory(category);
      setFormData(category);
    } else {
      setEditingCategory(null);
      setFormData({
        slug: '',
        name: '',
        description: '',
        image: '',
        productCount: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      slug: '',
      name: '',
      description: '',
      image: '',
      productCount: 0
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      console.log('Updating category:', formData);
    } else {
      console.log('Creating category:', formData);
    }
    handleCloseModal();
  };

  const handleDelete = (slug: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      console.log('Deleting category:', slug);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Title 
          title="Gestión de Categorías" 
          subtitle="Administra las categorías de tu tienda"
        />
        <Button
          label="Agregar Categoría"
          variant="primary"
          size="md"
          className="mt-4 sm:mt-0"
          onClick={() => handleOpenModal()}
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MdInventory className="w-4 h-4 mr-1" />
                  {category.productCount} productos
                </div>
              </div>
              {category.image && (
                <div className="w-16 h-16 rounded-lg overflow-hidden ml-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                {category.slug}
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  // onClick={() => handleOpenModal(category.slug)}
                  className="text-blue-600 hover:text-blue-900 p-1"
                >
                  <CiEdit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(category.slug)}
                  className="text-red-600 hover:text-red-900 p-1"
                >
                  <CiTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={handleCloseModal} />
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      {editingCategory ? 'Editar Categoría' : 'Agregar Categoría'}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Slug
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="women"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Women"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Descripción
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Elegant and stylish clothing for women"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL de Imagen
                      </label>
                      <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="/images/categories/women.jpg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cantidad de Productos
                      </label>
                      <input
                        type="number"
                        value={formData.productCount}
                        onChange={(e) => setFormData({...formData, productCount: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="0"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Button
                    // type="submit"
                    label={editingCategory ? 'Actualizar' : 'Crear'}
                    variant="primary"
                    size="sm"
                    className="w-full sm:w-auto sm:ml-3"
                  />
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
