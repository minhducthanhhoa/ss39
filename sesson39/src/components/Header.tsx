import React, {memo} from 'react'
interface Prop{
    a:number;
}

 function Header(props:Prop) {
    console.log("giá trị biến count bên com");
    /*
        khi component app được re-render thì các component con cũng re-render theo
     */
  return (
    <div>
        <p>giá trị count: {props.a}</p>
    </div>
  )
}
export default memo(Header)
