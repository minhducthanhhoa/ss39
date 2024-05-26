import React, { useContext } from 'react'
import { context } from './UseContext'
export default function E() {
    let result = useContext(context);
    console.log(result);
  return (
    <div>E
        <p>{result}</p>
    </div>
  )
}
