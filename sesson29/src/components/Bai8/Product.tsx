import React from 'react'
interface Prop{
    d: Table[];
}
interface Table{
    id:number,
    name:string,
    price:number,
    quanlity:number
}

export default function Product({d}: Prop) {
  return (
    <div>
        <h1>bài 8</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quanlity</th>
                </tr>
            </thead>
            <tbody>
                {d.map((item,index,arr) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quanlity}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
