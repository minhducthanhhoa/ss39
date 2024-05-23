import React, { Component } from 'react'

export default class ColorBox extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
        <h1>Bai 4</h1>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'red'}}>
        </div>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'blue'}}>
        </div>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'green'}}>
        </div>
      </div>
    )
  }
}
