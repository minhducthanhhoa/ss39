import React, { useState } from 'react'
import Product from './Product'
interface Products{
    id:number,
    name:string,
    price:number,
    quanlity:number
}
export default function ListProduct() {
    const [listProduct] = useState<Products[]>([
        {
            id:1,
            name:"cam sành",
            price:15000,
            quanlity:10,
        },
        {
            id:2,
            name:"Táo mỹ",
            price:20000,
            quanlity:5,
        },
        {
            id:3,
            name:"Dưa hấu",
            price:50000,
            quanlity:8,
        },
    ])
  return (
    <div>
        <Product d = {listProduct}></Product>
    </div>
  )
}
