import React from 'react'

export default function Bai1() {
    interface Student {
        name:string;
        price:number;
        id:number;
    }
    // render dữ liệu đối với function components
    let fullName:string="minh thu";
    let age:number = 25;
    let student = {
        name:"hoa",
        age:20,
        adress:"ha noi",
    }
    let numbers:number[] = [1,2,3,4];
    let students:string[] = ["thu","ngoc","lan","phuong"];
    let products:Student[] = [
        {
            name:"iphone5",
            price:5000,
            id:1,
        },
        {
            name:"iphone6",
            price:6000,
            id:2,
        },
        {
            name:"iphone7",
            price:7000,
            id:2,
        },
    ]
  return (
    /*
        khi return các element thì phải có thẻ fragment bọc bên ngoài 
     */
    <div>
        <p>Hiển thị tên: {fullName}</p>
        <p>{fullName} năm nay: {age} tuổi</p>
        <p>Tên: {student.name}</p>
        <p>Tuổi: {student.age}</p>
        <p>{JSON.stringify(student)}</p>
        <ul>
        {numbers.map((item,index,array) => {
            return <li key={index}>{item}</li>
        })}
        </ul>
        <ul>
            {students.map((item,index,array) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item,index,array) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.id}</td>
                    </tr>
                })}
            </tbody> 
        </table>
    </div>
  )
}