import React, { useState } from 'react'

export default function Bai1() {
    const [fullName] = useState<string>("Nguyễn Minh Sơn");
  return (
    <div>
        <h1>Bài 1</h1>
        <p><b>Họ và tên: {fullName}</b></p>
    </div>
  )
}
