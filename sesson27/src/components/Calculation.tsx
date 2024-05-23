import React, { Component } from 'react'

export default class Calculation extends Component {
    add(a:number,b:number):number{
        return a + b;
    }
    subtract(a:number,b:number):number{
        return a - b;
    }
    multiply(a:number,b:number):number{
        return a * b;
    }
    divide(a:number,b:number):number{
        return a / b;
    }
  render() {
    let num1 = 10;
    let num2 = 10;
    return (
      <div>
        <h1>Bài 2</h1>
        <h3>Danh sách kết quả</h3>
        <ul>
            <li>{num1} + {num2} = {this.add(num1,num2)}</li>
            <li>{num1} - {num2} = {this.subtract(num1,num2)}</li>
            <li>{num1} * {num2} = {this.multiply(num1,num2)}</li>
            <li>{num1} / {num2} = {this.divide(num1,num2)}</li>
        </ul>
      </div>
    )
  }
}
