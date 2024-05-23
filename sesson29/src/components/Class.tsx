import React, { Component } from 'react'
interface Props{

}
interface State{
  name:string,
  age:number,
  address:string
}
export default class Class extends Component<Props,State> {
  constructor(props:Props){
    super(props);
    this.state = {
      name: "minh thu",
      age:25,
      address:"hn"
    }
  }
  handleClick=() =>{
    this.setState({
      age:26,
      name:"hoa"
    })
  }
  render() {
    return (
      <div>Class
        <br />
        {this.state.name} năm nay {this.state.age} tuổi
        // cập nhật state
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
