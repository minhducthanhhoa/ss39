import React, { Component } from 'react'
import Bai1 from './components/Bai1'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import Userlayout from './components/Userlayout'
import Header from './components/bai8/Header'
import Navbar from './components/bai8/Navbar'
import './components/bai9/bai9.css'
import UserTable from './components/bai9/UserTable'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bai1></Bai1>
        <ListCourse></ListCourse>
        <Calculation></Calculation>
        <UserInfo></UserInfo>
        <ColorBox></ColorBox>
        <FormatName></FormatName>
        <Userlayout></Userlayout>
        <div className='container'>
         <Header></Header>
          <Navbar></Navbar>
          <main className='main'>
            <menu className='menu'>Menu</menu>
            <main className='list-cart'>
              <div className='cart-item'>Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
              <div className="cart-item">Cart</div>
            </main> 
            <article className='article'>Article</article>
          </main>
        </div>
        <div className="App">
          <UserTable />
        </div>

      </div>
    )
  }
}

