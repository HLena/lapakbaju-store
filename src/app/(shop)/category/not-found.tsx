import Link from 'next/link';
import { Title, Button, CategoryNavigation } from '@/components';
import { getAllCategories } from '@/config/categories';

const CategoryNotFound = () => {
  const validCategories = getAllCategories();

  return (
    <div className="min-h-screen m-auto py-12">
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
            <CategoryNavigation 
              variant="grid" 
              showCount={true}
              className="mb-8"
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  label="Back to Home"
                  variant="outline"
                  size="md"
                  type='link'
                  href='/'
                />
                <Button
                  label="Browse All Categories"
                  variant="primary"
                  size="md"
                  type='link'
                  href='/category/women'
                />
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