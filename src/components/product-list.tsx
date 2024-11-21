import React, { useMemo, useState } from "react";
import { productData } from "../data/items";
import { Product } from "./product";

type ProductType = {
  id: string;
  title: string;
  price: number;
  image: string;
};
export function ProductList() {
  const [products, setProducts] = useState<ProductType[]>(productData);
  const renderProducts = useMemo(() => {
    return products.map((product) => {
      return <Product key={product.id} {...product} />;
    });
  }, [products]);
  return <div className="grid grid-cols-3 gap-8 pb-10">{renderProducts}</div>;
}
