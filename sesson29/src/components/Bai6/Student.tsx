import React from 'react'
interface Props{
    b: Users[];
}
interface Users{
    id:number,
    name:string,
    address:string,
    email:string
}

export default function Student({b}:Props) {
  return (
    <div>
        <h1>Bài 6</h1>
        {b.map((item,index,arr) =>{
            return (
                <>
                    <p>Id: {item.id}</p>
                    <p>Product name: {item.name}</p>
                    <p>Address: {item.address}</p>
                    <p>Email: {item.email}</p>
                </>
            );
                
        })}
    </div>
  )
}
