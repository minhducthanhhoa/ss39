import React from 'react'

export default function Memo() {
  return (
    <div>
        {/*
            Memo ko phải là 1 hook, nó được gọi là HOC(higher order component):hàm bậc cao 
            cơ chế hoạt động là sẽ đi kiểm tra xem trong component co props nào thay đổi hay ko. Nếu 
            thay đổi thì component sẽ re-render còn ko thì thôi
         */}
    </div>
  )
}
