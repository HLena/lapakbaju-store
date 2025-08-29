
export interface Product {
  id: string,
  title: string,
  description?: string,
  slug: string,
  images: string[],
  // discount: number,
  sizes: Sizes[],
  tags?: string[],
  type?: Types,
  gender?: Categories,
  inStock?: number,
  price: number,
}



export type Categories = 'men'|'women'|'kid'|'unisex';
export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Types = 'shirt' | 'pants' | 'hoodies' | 'hats';
