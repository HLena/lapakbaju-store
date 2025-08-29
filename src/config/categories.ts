export interface Category {
  slug: string;
  name: string;
  description: string;
  image?: string;
  productCount: number;
}

export const VALID_CATEGORIES: Category[] = [
  {
    slug: "women",
    name: "Women",
    description: "Elegant and stylish clothing for women",
    image: "/images/categories/women.jpg",
    productCount: 45
  },
  {
    slug: "men",
    name: "Men",
    description: "Modern and comfortable clothing for men",
    image: "/images/categories/men.jpg",
    productCount: 38
  },
  {
    slug: "kid",
    name: "Kid",
    description: "Comfortable and trendy footwear",
    image: "/images/categories/shoes.jpg",
    productCount: 22
  },
  {
    slug: "unisex",
    name: "Unisex",
    description: "Complete your look with our accessories",
    image: "/images/categories/accessories.jpg",
    productCount: 31
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return VALID_CATEGORIES.find(cat => cat.slug === slug);
};

export const isValidCategory = (slug: string): boolean => {
  return VALID_CATEGORIES.some(cat => cat.slug === slug);
};

export const getAllCategories = (): Category[] => {
  return VALID_CATEGORIES;
};
