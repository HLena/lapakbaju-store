import CardProduct from '../../../../components/product/CardProduct';

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
  }
];

const ProductPage = () => {

  
  return (
    <>
      <div className="flex-1 h-32 p-6">
        <span className="text-gray-400">Main Page &gt; Category &gt; Pants </span>
        <h1 className="py-4 text-3xl font-bold text-gray-600">Clothes</h1>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-6 md:px-20">
        {
          products.map(product => (
            <CardProduct key={product.id} {...product}/>
          ))
        }

      </div>
    </>
  )
}

export default ProductPage