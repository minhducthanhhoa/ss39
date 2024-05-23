import React from 'react'

export default function ListCourse() {
    let listCourse:string[] = ["HTML","CSS","JavaScript","ReactJS"];
  return (
    <div>
        <h1>Bài 1</h1>
        <h3>Danh sách khóa học</h3>
        <ol>
          {listCourse.map((item,index,array) => {
              return <li key={index}>{item}</li>
          })}
        </ol>
    </div>
  )
}
