import React from 'react'
interface Prop{
    a: Product[];
}
interface Product{
    id:number,
    name:string,
    price:number,
    quanlity:number
}
export default function Children({a}:Prop) {
    
  return (
    <div>
        <h1>Bài 5</h1>
        <h3>Dữ liệu trong component con</h3>
        {a.map((item,index,arr) =>{
            return (
                <>
                    <p>Id: {item.id}</p>
                    <p>Product name: {item.name}</p>
                    <p>Price: {item.price} đ</p>
                    <p>Quanlity: {item.quanlity}</p>
                </>
            );
                
        })}
    </div>
  )
}
