import React from 'react'
interface Props{
    fullName:string;
}

export default function Children_Comp(props:Props) {
  return (
    <div>
       <h1>bài 4</h1>
       <p>Họ và tên: {props.fullName}</p> 
    </div>
  )
}
