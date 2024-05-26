import React, { useMemo } from 'react'

export default function UseMemo() {
    let cart = [
        {
            product:"iphone5",
            price:5000,
            quantity:1
        },
        {
            product:"iphone6",
            price:7000,
            quantity:4
        },
        {
            product:"iphone11",
            price:8000,
            quantity:5
        },
        {
            product:"iphone14",
            price:10000,
            quantity:7
        },
    ]
    let memo = useMemo(() =>{
        let payment = cart.reduce((accumulator,currentValue) =>{
            return accumulator + currentValue.price * currentValue.quantity;
        },0)
        return payment
    },[])
    
  return (
    <div>UseMemo
        {/*
            là 1 hook giúp tính toán 
         */}
         <button onClick={() => setCount(cou)}>Click</button>
    </div>
  )
}
