"use client";

import { Button } from "@/components";

interface AddToCartButtonProps {
  className?: string;
}

const AddToCartButton = ({ className = "" }: AddToCartButtonProps) => {
  const handleAddToCart = () => {
    // TODO: Implement add to cart logic
    console.log("Add to cart clicked");
  };

  return (
    <Button
      label="Add to Cart"
      variant="primary"
      size="lg"
      className={className}
      onClick={handleAddToCart}
    />
  );
};

export default AddToCartButton;
