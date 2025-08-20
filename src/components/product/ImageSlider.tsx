"use client";
import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({images}: {images: string[]}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex-1/2">
        <Image src={images[currentImageIndex]} alt="current-image" height={500} width={500} className="m-auto"/>
        <div className="flex justify-center mt-5 gap-2">
          {
            images.map((image, index) => (
              <div 
                key={image} 
                onClick={() => setCurrentImageIndex(index)}
                className="cursor-pointer"
              >
                <Image src={image} alt={`image-${index}`} height={80} width={80}/>
              </div>)
            )
          }

        </div>
      </div>
  )
}

export default ImageSlider