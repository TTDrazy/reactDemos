import React, { Component } from 'react'

export default class Flowify extends Component {
  //使用 flow ，VSCode 里要将设置里的 'javascript.validate.enable:flase'
  //@flow
  concat = (a:string,b:string) => {
    return a+b;
  }
  render() {
    console.log(this.concat('1','5'));
    //console.log(this.concat(1,5));  类型不一致，错误
    return (
      <div>    
      </div>
    )
  }
}

