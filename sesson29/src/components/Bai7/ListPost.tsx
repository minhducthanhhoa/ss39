import React, { useState } from 'react'
import Post from './Post'
interface Products{
    id:number,
    title:string,
    content:string,
    author:string,
}
export default function ListPost() {
    const [listPost] = useState<Products[]>([
        {
            id:1,
            title:"Tại sao nên học ReactJS",
            content:"Học ReactJs để đi làm",
            author:"David"
        },
        {
            id:2,
            title:"Props trong ReactJs",
            content:"Props giúp truyền dữ liệu từ component con xuống component cha",
            author:"Linda"
        },
        {
            id:3,
            title:"State trong ReactJS là gì?",
            content:"State giúp trữ trạng thái dữ liệu bên trong một component",
            author:"David"
        },
    ])
  return (
    <div>
        <Post c = {listPost}></Post>
    </div>
  )
}
