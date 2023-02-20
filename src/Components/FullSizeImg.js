import React, { Component } from 'react'

export default class FullSizeImg extends Component {
  constructor(){
  super()
    this.state={
      img:''
    }
  }
  componentDidMount(){
    let data=JSON.parse(localStorage.getItem("image-app"))
  //  console.log(data)
    this.setState({
      img:data
    })
  }
  render() {
    console.log(this.state.img)
    return (
      
      <div >
        <img className='ImgFullSize' src={`${this.state.img}`} alt="" />
      </div>
    )
  }
}