"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAllCategories } from '@/config/categories';

interface CategoryNavigationProps {
  className?: string;
  showCount?: boolean;
  variant?: 'horizontal' | 'vertical' | 'grid';
}

const CategoryNavigation = ({ 
  className = "", 
  showCount = true, 
  variant = 'horizontal' 
}: CategoryNavigationProps) => {
  const pathname = usePathname();
  const categories = getAllCategories();

  const isActive = (slug: string) => {
    return pathname === `/category/${slug}`;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'vertical':
        return 'flex flex-col space-y-2';
      case 'grid':
        return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';
      default:
        return 'flex flex-wrap gap-4';
    }
  };

  const getItemClasses = (slug: string) => {
    const baseClasses = "transition-colors duration-200";
    const activeClasses = "text-violet-600 font-semibold";
    const inactiveClasses = "text-gray-600 hover:text-violet-600";

    if (variant === 'grid') {
      return `block p-4 border rounded-lg transition-all duration-200 ${
        isActive(slug)
          ? 'border-violet-300 bg-violet-50 text-violet-600'
          : 'border-gray-200 hover:border-violet-300 hover:bg-violet-50'
      }`;
    }

    return `${baseClasses} ${isActive(slug) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className={`${getVariantClasses()} ${className}`}>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className={getItemClasses(category.slug)}
        >
          {variant === 'grid' ? (
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              {showCount && (
                <p className="text-sm text-gray-500">
                  {category.productCount} products
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {category.description}
              </p>
            </div>
          ) : (
            <span>
              {category.name}
              {showCount && (
                <span className="ml-2 text-xs text-gray-400">
                  ({category.productCount})
                </span>
              )}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNavigation;
