import React from 'react'
interface Prop{
    c: ListPost[];
}
interface ListPost{
    id:number;
    title:string;
    content:string;
    author:string;
}
export default function Post({c}: Prop) {
  return (
    <div>
        <h1>Bài 7</h1>
        <h3>Danh sách bài viết</h3>
        {c.map((item,index,arr) => {
            return (
                <>
                    <p>Id: {item.id}</p>
                    <p>Title: {item.title}</p>
                    <p>Content: {item.content}</p>
                    <p>Author: {item.author}</p>
                </>
            )
        })}
    </div>
  )
}
