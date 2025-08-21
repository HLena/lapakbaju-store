import { CiCreditCard2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import { ColorSelector, ImageSlider, QuantitySelector, SizesSelector } from "@/components";

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



  return (
    <div className='grow flex flex-col lg:flex-row'>
      
      <ImageSlider images={images}/>

      <div className="flex-1/2 py-5 px-10">
        <p className="text-gray-400 text-sm">
          Shop / Wowen / Shirt
        </p>
        <h2 className="text-gray-800 text-2xl my-5">
          Raven Top With <br />
          Colored Leaves Design
        </h2>

        <p className="text-gray-500 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati magni sequi adipisci quo animi ullam eos illum repellendus ipsam beatae dignissimos praesentium excepturi minima, est odio dolor voluptas. Quisquam, fugit!</p>

        {/* rating  and  comments */}
        <div className="flex gap-4">
          <div className="text-amber-400 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-gray-400 text-sm">4.5</span>
          </div>
          <div className="flex gap-2 items-center text-gray-400">
            <LuMessageCircleMore />
            <span>120 comments</span>
          </div>
        </div>

        <p className="text-gray-900 text-md my-3">Select Size</p>
        <SizesSelector selectedSize="S"/>
        <p className="text-gray-900 text-md my-3">Colours Available</p>
        <ColorSelector/>
        <div className="flex gap-3 my-5">
          {/* <button 
            className="flex gap-2 items-center bg-violet-600 text-white  px-14 h-10 rounded-full"> 
              <FiShoppingCart className="text-white" />
              Add to Cart
          </button> */}
          <QuantitySelector quantity={0} />
          <p className="border py-2 px-3 rounded-full text-gray-800 font-semibold border-gray-300"> $ 65.00 </p>
        </div>

        <hr />
        <div className="grid grid-cols-2">
          <p className="flex items-center my-3 text-gray-600 text-sm"> <CiCreditCard2 className="mr-3 text-xl"/> Secure payment</p>
          <p className="flex items-center my-3 text-gray-600 text-sm"> <CiShoppingTag className="mr-3 text-xl"/> Secure payment</p>
          <p className="flex items-center my-3 text-gray-600 text-sm"> <LiaShippingFastSolid className="mr-3 text-xl"/> Secure payment</p>
          <p className="flex items-center my-3 text-gray-600 text-sm"> <CiBoxes className="mr-3 text-xl"/> Secure payment</p>
        </div>


      </div>
    </div>
  )
}

export default ProductPage