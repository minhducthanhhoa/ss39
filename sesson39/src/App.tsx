import React, { useCallback, useState } from 'react'
import UseRef from './components/UseRef'
import Header from './components/Header'
import Main from './components/Main'
import UseReducer from './components/UseReducer'
import ThemeContext from './components/Bài tập ss37/Bai1/ThemeContext'
import Bai2 from './components/Bài tập ss37/Bai2/Bai2'
import Button from './components/Bài tập ss37/Bai3/Button'

export default function App() {
  const [count,setCount] = useState<number>(0);
  const [active,setActive] = useState<boolean>(false);
  const handleClick = () =>{
    setActive(!active);
    setCount(count + 1);
  }
  const getIdProduct = () =>{
    
  }
 let result = useCallback(() =>{
    const getIdProduct =()=>{

    }
    return getIdProduct;
  },[])
  console.log("component add re-render khi click");

  return (
    <div>
      {active ? <p>Xin chao</p>: ""}
      <UseRef></UseRef>
      <Header a={count}></Header>
      <Main b={result}></Main>
      <button onClick={handleClick}>Click active</button>
      <UseReducer></UseReducer>
      <ThemeContext.Provider value="blue">
        <Bai2></Bai2>
        <Button />
      </ThemeContext.Provider>
    </div>
  )
}
