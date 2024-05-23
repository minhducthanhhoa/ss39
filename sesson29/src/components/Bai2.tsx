import React, { useState } from 'react'
interface Person{
    id:number,
    name:string,
    date:string,
    address:string
}

export default function Bai2() {
    const [person,setPerson] = useState<Person[]>([{id:1,name:"nguyễn Văn Sơn",date:"20/12/2023",address:"Thanh Xuân, Hà Nội"}])
  return (
    <div>
        <h1>Bài 2</h1>
        <h3>Thông tin cá nhân</h3>
        <p>id: {person[0].id}</p>
        <p>Tên: {person[0].name}</p>
        <p>Ngày sinh: {person[0].date}</p>
        <p>Địa chỉ: {person[0].address}</p>
    </div>
  )
}
