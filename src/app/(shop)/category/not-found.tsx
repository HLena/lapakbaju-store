import Link from 'next/link';
import { Title, Button } from '@/components';
import { getAllCategories } from '@/config/categories';

const CategoryNotFound = () => {
  const validCategories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="mx-auto w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center mb-8">
            <span className="text-4xl font-bold text-violet-600">404</span>
          </div>

          {/* Title */}
          <Title 
            title="Category Not Found" 
            subtitle="The category you're looking for doesn't exist"
            className="text-center mb-8"
          />

          {/* Message */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <p className="text-gray-600 text-lg mb-6">
              Sorry, the category you're trying to access doesn't exist or has been moved. 
              Here are some valid categories you might be interested in:
            </p>

            {/* Valid Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {validCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-violet-300 hover:bg-violet-50 transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.productCount} products
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  label="Back to Home"
                  variant="outline"
                  size="md"
                />
              </Link>
              <Link href="/category/women">
                <Button
                  label="Browse All Categories"
                  variant="primary"
                  size="md"
                />
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNotFound;