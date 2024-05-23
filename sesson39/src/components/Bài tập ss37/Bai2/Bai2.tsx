import React, { useState } from 'react'
import ThemeContext from '../Bai1/ThemeContext'

export default function Bai2() {
  const theme = useState(ThemeContext);
  return (
    <div style={{color:theme}}></div>
  )
}
