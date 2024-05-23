import React, { createContext, useState } from 'react'
import B from './B'
const useContext = createContext<any>("");
export default function A() {
    let fullname = "minh thu"
  return (
    <div>A
        <useContext.Provider value={fullname}>
            <B></B>
        </useContext.Provider>
      
    </div>
  )
}
