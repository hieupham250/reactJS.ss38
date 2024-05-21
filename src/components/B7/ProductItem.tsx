import React, { memo } from "react";

interface ProductItemProps {
  id: number; // Receive id as a prop
  name: string;
  price: number;
  quantity: number;
}

const ProductItem = memo(({ id, name, price, quantity }: ProductItemProps) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
});

export default ProductItem;
