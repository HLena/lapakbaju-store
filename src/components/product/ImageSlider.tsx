"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageSliderProps {
  images: { url: string }[]
}

const ImageSlider = ({images}: ImageSliderProps ) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex-1/2">
        <Image src={`/products/${images[currentImageIndex].url}`} alt="current-image" height={500} width={500} className="m-auto"/>
        <div className="flex justify-center mt-5 gap-2">
          {
            images.map((image, index) => (
              <div 
                key={image.url} 
                onClick={() => setCurrentImageIndex(index)}
                className="cursor-pointer"
              >
                <Image src={`/products/${image.url}`} alt={`image-${index}`} height={80} width={80}/>
              </div>)
            )
          }

        </div>
      </div>
  )
}

export default ImageSlider