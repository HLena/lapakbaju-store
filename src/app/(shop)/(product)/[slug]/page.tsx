import { CiCreditCard2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import { ColorSelector, ImageSlider, QuantitySelector, SizesSelector, Title, AddToCartButton } from "@/components";
import { getProductDetails } from "@/actions";
import Link from "next/link";


interface ProductPageProps {
  params:  Promise<{ slug: string}>,
  searchParams: Promise<{ page?: string }>
}

const images = [
  "/images/products/blouse-pink.webp",
  "/images/products/blouse-blue.webp",
  "/images/products/blouse-green.webp",
]

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {

  const { slug } = await params;
  const product = await getProductDetails(slug);
  // const { Pro} = product;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <ImageSlider images={product?.ProductImage ?? []}/>
            </div>

            <div className="space-y-6">
              <nav className="text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-violet-600 transition-colors capitalize">Shop</Link></li>
                  <li>/</li>
                  <li><Link href={`/category/${product?.gender}`} className="hover:text-violet-600 transition-colors capitalize">{product?.gender}</Link></li>
                  <li>/</li>
                  <li><span className="text-gray-400 capitalize">{product?.tags[0]}</span></li>
                </ol>
              </nav>

              <Title 
                title={product?.title}
                className="text-left"
              />

              {/* Rating and Reviews */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.5</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <LuMessageCircleMore className="w-5 h-5" />
                  <span className="text-sm">120 reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-gray-900">
                ${product?.price}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
                <SizesSelector sizes={product?.sizes}/>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Available Colors</h3>
                <ColorSelector/>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                  <QuantitySelector quantity={1} />
                <AddToCartButton className="flex-1" />
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <CiCreditCard2 className="w-5 h-5 text-violet-600" />
                    <span className="text-sm">Secure payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <CiShoppingTag className="w-5 h-5 text-violet-600" />
                    <span className="text-sm">Best price guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <LiaShippingFastSolid className="w-5 h-5 text-violet-600" />
                    <span className="text-sm">Fast shipping</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <CiBoxes className="w-5 h-5 text-violet-600" />
                    <span className="text-sm">Easy returns</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  { product?.description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage