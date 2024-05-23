import React, { useReducer, useState } from 'react'

export default function UseReducer() {
  const [count,setcount] = useState<number>(0);
  let initial = {
    product:{},
    products:[],
    isloading:false,
  }
  const reducer = (state:any,action:any) =>{
      switch (action) {
        case "increase":
          return state+1
      
        default:
          return state;
      }
  }
  let initialCount = 0;
  const [state,dispatch]  = useReducer(reducer,initialCount);
  //destructoring
  const handleClick = ()=>{
    dispatch("increase")
  }

  return (
    <div>
      {/* 
          đây là 1 hook hay còn gọi là hàm
          dùng để quản lí các state phức tạp 
          đối với những cái state đơn giản thì được dùng useReducer
          tuy nhiên những state đơn giản thì nên dùng useState
          đầu vào useReducer nhận vào 2 tham số
           - là 1 hàm reducer , đặt tên j cũng được
           - tham số thứ 2 là giá trị khởi tạo
          Nắm được luồng chạy của useReducer bài sau sẽ học redux(thư viện quản lí state)
       */}
       <p>Giá trị biến count: {state}</p>
       <button onClick={handleClick}>Increase</button>
    </div>
  )
}
