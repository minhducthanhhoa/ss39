import React, { useState } from 'react'

export default function Function() {
    const [fullName,setFullName] = useState<string>("hoa");
    const [age,setAge] = useState<number>(13);
    const [students,setStudents] = useState<string[]>([]);
    const handleChange = ()=>{
        setAge(14);
        setFullName("hong");
    }

  return (
    <div>Function
        <p>
            state dùng để quản lí dữ liệu trong component
            đối với function để quản lí dữ liệu dùng userState
            đây là 1 hook sinh ra giúp function có thể quản lí dữ liệu
            state có thể thay đổi giá trị được
        </p>
        <p>
            {fullName} năm nay {age} tuổi
        </p>
        <button onClick={handleChange}>change age</button>
    </div>
  )
}
