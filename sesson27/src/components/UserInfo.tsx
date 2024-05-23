import React from 'react'

export default function UserInfo() {
    let person = {
        name:"Nguyễn Văn A",
        sex:"Nam",
        date:"06/03/2024",
        email:"nva@gmail.com",
        address:"Thanh Xuân, Hà Nội",
    }
  return (
    <div>
        <h1>Bài 3</h1>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: <b>{person.name}</b></li>
            <li>Giới tính: <b>{person.sex}</b></li>
            <li>Ngày sinh: <b>{person.date}</b></li>
            <li>Email: <b>{person.email}</b></li>
            <li>Địa chỉ: <b>{person.address}</b></li>
        </ul>
    </div>
  )
}
