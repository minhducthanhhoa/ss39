import React, { memo } from 'react'
interface Prop{
   b:Function;
}

function Main(props:Prop) {
    console.log("coponent main được re-render theo app");
    console.log("goi function ra", props.b);
  return (
    <div>Main</div>
  )
}
export default memo(Main)
