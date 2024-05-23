import React from 'react'
interface Props{
  product:Product;
}
interface Product{
  name:string;
  id:number;
  price:number;
}

export default function Product(props:Props) {
  console.log(props);
  // destructoring
  const {product} = props;
  return (
    <div>Product
      Tên sản phẩm: {product.name};
      Giá sản phẩm: {product.price};
    </div>
  )
}
