import React, { useMemo } from "react";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  console.log("Hiển thị danh sách sản phẩm");

  const productList = useMemo(() => {
    return products.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
      />
    ));
  }, [products]);

  return (
    <div>
      <h2>B7</h2>
      {productList}
    </div>
  );
}
