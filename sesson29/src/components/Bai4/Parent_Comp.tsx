import React, { useState } from 'react'
import Children_Comp from './Children_Comp'
export default function Parent_Comp() {
    const [fullname] = useState<string>("Ngô Minh Đức");
  return (
    <div>Parent_Comp
        <Children_Comp fullName={fullname}></Children_Comp>
    </div>
    
  )
}
