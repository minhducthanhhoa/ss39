import React from 'react'
interface Props{
  fullName:string;
  a:number;
}

export default function Parent(props:Props) {
  console.log(`Năm nay ${props.fullName} ${props.a} tuổi`);
  
  return (
    <div>parent
      <p>Năm nay {props.fullName} {props.a} tuổi</p>
      
    </div>
  )
}
