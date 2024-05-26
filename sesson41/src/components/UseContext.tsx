import React, { createContext, useState } from 'react'
import A from './A'
export const context = createContext("");
export default function UseContext() {
    const [name,setName] = useState<string>("trang");
  return (
    <div>
        {/*
            sinh ra để truyền dữ liêu giữa các component có quan hệ cha con được nhanh hơn, dễ dàng hơn
            ko phải truyền theo kiểu props bình thường  
            Các component phải có quan hệ cha con
            
         */}
         <context.Provider value={name}>
            <A></A>
         </context.Provider>
    </div>
  )
}
