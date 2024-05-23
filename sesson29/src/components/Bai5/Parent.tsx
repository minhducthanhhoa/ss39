import React from 'react'
import Children from './Children'

export default function Parent() {
    let product = [
        {
            id:1,
            name:"iphone15",
            price:12000,
            quanlity:6
        }
    ]
  return (
    <div>
        <Children a = {product}></Children>
    </div>
  )
}
