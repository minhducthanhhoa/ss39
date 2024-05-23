import React from 'react'
import Product from './Product'
interface Props{
    b:A[]
}
    interface A{
        name:string,
        id:number,
        price:number
    }


export default function Products(props1:Props) {
    const {b} = props1;
    
  return (
    <div>Products
        <ul>
            {b.map((item,index,arr) =>{
                return <Product product={item}></Product>
            })}
        </ul>
        
        
    </div>
  )
}
