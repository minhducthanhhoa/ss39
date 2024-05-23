import React, { useContext, useState } from 'react'
import ThemeContext from '../Bai1/ThemeContext'

export default function Button() {
    const theme = useContext(ThemeContext);
    const buttonStyle = {
        backgroundColor: theme, 
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      };
  return (
    <div>
        <button style={buttonStyle}>Click me</button>
    </div>
  )
}
