import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0);
    let index = 0;
    const refCurrent1 = useRef<any>();
    useEffect(()=>{
        refCurrent1.current?.focus();
    },[])
    
    // là 1 hàm nhận vào tham số là 1 giá trị khởi tạo truyền vào.
    // useRef trả về 1 đối tượng hay 1 obj bên trong obj này sẽ có 1 key với giá trị là giá trị tham số truyền vào
    // khi mỗi lần component re-render thì useRef sẽ ko tạo ra tham chiếu mới
    // khi muốn focus vào ô input khi muốn nhập dữ liệu 
 
    const handleClick = () => {
        // ref.current = ref.current +1;
        
        index++;
        setCount(count + 1);
    }
    console.log("giá trị ref sau khi click",refCurrent1);
    console.log("Giá trị index",index);
  return (
    <div>
        <p>Giá trị count: {count}</p>
        <button onClick={handleClick}>click</button>
        <input 
            ref={refCurrent1}
            type="text" placeholder="Nhập email"
        />
    </div>
  )
}
