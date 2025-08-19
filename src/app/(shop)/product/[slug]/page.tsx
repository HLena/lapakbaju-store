import Pagination from '@/components/ui/Pagination';
import CardProduct from '../../../../components/product/CardProduct';
import { redirect } from "next/navigation";
import Title from '@/components/ui/title/Title';


const products: Product[] = [
  {
    name: "Camiseta Oversize",
    id: "p001",
    url: "https://example.com/products/p001",
    category: ["Ropa", "Camisetas"],
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    name: "Zapatillas Running",
    id: "p002",
    url: "https://example.com/products/p002",
    category: ["Calzado", "Deporte"],
    price: 299.99,
    discount: 15,
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  {
    name: "Chaqueta Denim",
    id: "p003",
    url: "https://example.com/products/p003",
    category: ["Ropa", "Chaquetas"],
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Mochila Urbana",
    id: "p004",
    url: "https://example.com/products/p004",
    category: ["Accesorios", "Bolsos"],
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    name: "Pantalón Cargo",
    id: "p005",
    url: "https://example.com/products/p005",
    category: ["Ropa", "Pantalones"],
    price: 129.9,
    discount: 20,
    sizes: ["30", "32", "34", "36"]
  },
  {
    name: "Sudadera Hoodie",
    id: "p006",
    url: "https://example.com/products/p006",
    category: ["Ropa", "Sudaderas"],
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Botas de Cuero",
    id: "p007",
    url: "https://example.com/products/p007",
    category: ["Calzado", "Casual"],
    price: 349.0,
    discount: 0,
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    name: "Gorra Snapback",
    id: "p008",
    url: "https://example.com/products/p008",
    category: ["Accesorios", "Gorras"],
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    name: "Vestido Floral",
    id: "p009",
    url: "https://example.com/products/p009",
    category: ["Ropa", "Vestidos"],
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Reloj Minimalista",
    id: "p010",
    url: "https://example.com/products/p010",
    category: ["Accesorios", "Relojes"],
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    name: "Camiseta Oversize",
    id: "p011",
    url: "https://example.com/products/p001",
    category: ["Ropa", "Camisetas"],
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    name: "Zapatillas Running",
    id: "p012",
    url: "https://example.com/products/p002",
    category: ["Calzado", "Deporte"],
    price: 299.99,
    discount: 15,
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  {
    name: "Chaqueta Denim",
    id: "p013",
    url: "https://example.com/products/p003",
    category: ["Ropa", "Chaquetas"],
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Mochila Urbana",
    id: "p014",
    url: "https://example.com/products/p004",
    category: ["Accesorios", "Bolsos"],
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    name: "Pantalón Cargo",
    id: "p015",
    url: "https://example.com/products/p005",
    category: ["Ropa", "Pantalones"],
    price: 129.9,
    discount: 20,
    sizes: ["30", "32", "34", "36"]
  },
  {
    name: "Sudadera Hoodie",
    id: "p016",
    url: "https://example.com/products/p006",
    category: ["Ropa", "Sudaderas"],
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Botas de Cuero",
    id: "p017",
    url: "https://example.com/products/p007",
    category: ["Calzado", "Casual"],
    price: 349.0,
    discount: 0,
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    name: "Gorra Snapback",
    id: "p018",
    url: "https://example.com/products/p008",
    category: ["Accesorios", "Gorras"],
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    name: "Vestido Floral",
    id: "p019",
    url: "https://example.com/products/p009",
    category: ["Ropa", "Vestidos"],
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Reloj Minimalista",
    id: "p020",
    url: "https://example.com/products/p010",
    category: ["Accesorios", "Relojes"],
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    name: "Camiseta Oversize",
    id: "p021",
    url: "https://example.com/products/p001",
    category: ["Ropa", "Camisetas"],
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    name: "Zapatillas Running",
    id: "p022",
    url: "https://example.com/products/p002",
    category: ["Calzado", "Deporte"],
    price: 299.99,
    discount: 15,
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  {
    name: "Chaqueta Denim",
    id: "p023",
    url: "https://example.com/products/p003",
    category: ["Ropa", "Chaquetas"],
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Mochila Urbana",
    id: "p024",
    url: "https://example.com/products/p004",
    category: ["Accesorios", "Bolsos"],
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    name: "Pantalón Cargo",
    id: "p025",
    url: "https://example.com/products/p005",
    category: ["Ropa", "Pantalones"],
    price: 129.9,
    discount: 20,
    sizes: ["30", "32", "34", "36"]
  },
  {
    name: "Sudadera Hoodie",
    id: "p026",
    url: "https://example.com/products/p006",
    category: ["Ropa", "Sudaderas"],
    price: 149.99,
    discount: 10,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Botas de Cuero",
    id: "p027",
    url: "https://example.com/products/p007",
    category: ["Calzado", "Casual"],
    price: 349.0,
    discount: 0,
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    name: "Gorra Snapback",
    id: "p028",
    url: "https://example.com/products/p008",
    category: ["Accesorios", "Gorras"],
    price: 59.9,
    discount: 5,
    sizes: []
  },
  {
    name: "Vestido Floral",
    id: "p029",
    url: "https://example.com/products/p009",
    category: ["Ropa", "Vestidos"],
    price: 179.0,
    discount: 25,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Reloj Minimalista",
    id: "p030",
    url: "https://example.com/products/p010",
    category: ["Accesorios", "Relojes"],
    price: 499.99,
    discount: 10,
    sizes: []
  },
  {
    name: "Camiseta Oversize",
    id: "p031",
    url: "https://example.com/products/p001",
    category: ["Ropa", "Camisetas"],
    price: 89.9,
    discount: 10,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    name: "Zapatillas Running",
    id: "p032",
    url: "https://example.com/products/p002",
    category: ["Calzado", "Deporte"],
    price: 299.99,
    discount: 15,
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  {
    name: "Chaqueta Denim",
    id: "p033",
    url: "https://example.com/products/p003",
    category: ["Ropa", "Chaquetas"],
    price: 199.5,
    discount: 0,
    sizes: ["S", "M", "L"]
  },
  {
    name: "Mochila Urbana",
    id: "p034",
    url: "https://example.com/products/p004",
    category: ["Accesorios", "Bolsos"],
    price: 159.0,
    discount: 5,
    sizes: []
  },
  {
    name: "Pantalón Cargo",
    id: "p035",
    url: "https://example.com/products/p005",
    category: ["Ropa", "Pantalones"],
    price: 129.9,
    discount: 20,
    sizes: ["30", "32", "34", "36"]
  },
];

const paginate = (items: Product[], page: number, pageSize: number) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end),
    page,
    totalItems,
    totalPages
  }

}

interface ProductPageProps {
  params:  Promise<{ slug: string}>,
  searchParams: Promise<{ page?: string }>
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {

  const pageSize = 10;

  const { slug } = await params;
  const { page } = await searchParams;

  // console.log(slug, '------', page)

  if(!page) redirect(`/product/${slug}?page=1`)
  

  return (
    <div className='grow'>
      <Title/>
      <div className="mx-4 grid gap-8 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          products.map(product => (
            <CardProduct key={product.id} {...product}/>
          ))
        }
      </div>
      <Pagination paginationDetails={{
        total: products.length,
        take: 10,
        skip: 0
      }}/>
    </div>
  )
}

export default ProductPage