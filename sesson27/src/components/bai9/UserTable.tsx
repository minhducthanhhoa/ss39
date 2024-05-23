import React from 'react'
import UserRow from './UserRow';

interface User{
    id:number;
    name:string;
    birthDate:string;
    gender:string;
    address:string;
}

export default function UserTable() {
    let users:User[] =[
        {
            id:1,
            name:"Malcolm Lockyer",
            birthDate:"21/03/1961",
            gender:"Nam",
            address:"NewYork"
        },
        {
            id:2,
            name:"Maris",
            birthDate:"11/02/1990",
            gender:"Nữ",
            address:"London"
        }
    ];
  return (
    <>
        <table className="user-table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => {
                    <UserRow key={user.id} index={index +1} user={user} />
                })}
            </tbody>
        </table>
    </>
  )
}
