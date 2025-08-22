import { CardProduct, Pagination, Title } from '@/components';
import { Product } from '@/interfaces';

const products: Product[] = [
  {
    title: "Camiseta Oversize",
    slug: "p001",
    images: "https://example.com/products/p001",
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    title: "Zapatillas Running",
    slug: "p002",
    images: "https://example.com/products/p002",
    price: 299.99,
    discount: 15,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    title: "Chaqueta Denim",
    slug: "p003",
    images: "https://example.com/products/p003",
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Mochila Urbana",
    slug: "p004",
    images: "https://example.com/products/p004",
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    title: "Sudadera Hoodie",
    slug: "p006",
    images: "https://example.com/products/p006",
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    title: "Gorra Snapback",
    slug: "p008",
    images: "https://example.com/products/p008",
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    title: "Vestido Floral",
    slug: "p009",
    images: "https://example.com/products/p009",
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Reloj Minimalista",
    slug: "p010",
    images: "https://example.com/products/p010",
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    title: "Camiseta Oversize",
    slug: "p011",
    images: "https://example.com/products/p001",
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    title: "Chaqueta Denim",
    slug: "p013",
    images: "https://example.com/products/p003",
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Mochila Urbana",
    slug: "p014",
    images: "https://example.com/products/p004",
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    title: "Sudadera Hoodie",
    slug: "p016",
    images: "https://example.com/products/p006",
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    title: "Gorra Snapback",
    slug: "p018",
    images: "https://example.com/products/p008",
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    title: "Vestido Floral",
    slug: "p019",
    images: "https://example.com/products/p009",
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Reloj Minimalista",
    slug: "p020",
    images: "https://example.com/products/p010",
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    title: "Camiseta Oversize",
    slug: "p021",
    images: "https://example.com/products/p001",
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    title: "Chaqueta Denim",
    slug: "p023",
    images: "https://example.com/products/p003",
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Mochila Urbana",
    slug: "p024",
    images: "https://example.com/products/p004",
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    title: "Sudadera Hoodie",
    slug: "p026",
    images: "https://example.com/products/p006",
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    title: "Gorra Snapback",
    slug: "p028",
    images: "https://example.com/products/p008",
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    title: "Vestido Floral",
    slug: "p029",
    images: "https://example.com/products/p009",
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    title: "Reloj Minimalista",
    slug: "p030",
    images: "https://example.com/products/p010",
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    title: "Camiseta Oversize",
    slug: "p031",
    images: "https://example.com/products/p001",
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  }
];

interface PageProps {
  params: Promise<{ category: string }>,
  searchParams: Promise<{ page?: string }>
}

const Page = async ({ params, searchParams }: PageProps) => {
  const pageSize = 10;
  const { category } = await params;
  const { page } = await searchParams;

  return (
    <div className="min-h-screen m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Filter Button */}
        <div className="mb-8">
          <Title 
            title={category} 
            subtitle={`Discover our ${category} collection`}
            showFilterButton={true}
          />
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
          {products.map(product => (
            <CardProduct key={product.slug} {...product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination paginationDetails={{
            total: products.length,
            take: 10,
            skip: 0
          }} />
        </div>
      </div>
    </div>
  )
}

export default Page