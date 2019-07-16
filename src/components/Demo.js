import React, { Component } from "react";
import FancyButton from "./FancyButton";
import TextInput from "./TextInput";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.HOCRef = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
          this.myRef.current.innerText = "Refs 转发";
        }, 2000);
        console.log(this.myRef.current);//普通 => 证明已经转发，能够取到子组件的基本元素了
        console.log(this.HOCRef.current);//高阶 => 证明已经转发，能够取到子组件了
      }
    render() {
        
        return (
            <div>   
                <FancyButton ref={this.myRef}>Click me!</FancyButton>
                <TextInput ref={this.HOCRef}>高阶函数转发Refs</TextInput>
            </div>
        );
    }
}
export default Demo;
