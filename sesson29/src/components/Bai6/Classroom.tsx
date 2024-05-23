import React from 'react'
import Student from './Student'
export default function Classroom() {
    let users = [
        {
            id:1,
            name:"John",
            address:"Hà Nội",
            email:"john@gmail.com"
        },
        {
            id:2,
            name:"Linda",
            address:"Hà Nam",
            email:"linda@gmail.com"
        },
    ]
  return (
    <div>
        <Student b = {users}></Student>
    </div>
  )
}
