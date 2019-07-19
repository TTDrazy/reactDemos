import React, { Component } from "react";
import dogImg from "./img/dog.jpg";
import WithMouse from "./WithMouse";

 class Dog extends Component {
    handleClick = () => {
        this.props.mousePosition.x = 50;
        this.props.mousePosition.y = 50;
        console.log(this.props.mousePosition);
    };
    render() {
        //拿到通过 props render 传递过来的参数
        const { x, y } = this.props.mousePosition;
        return (
            <div style={{ postion: "realtive" }}>
                <img
                    src={dogImg}
                    alt="这是一张汪的图片"
                    style={{
                        width: "50px",
                        height: "60px",
                        position: "absolute",
                        left: x,
                        top: y
                    }}
                />
                {/* 子组件内可以根据传递过来的参数动态渲染，但是无法直接操纵父组件中传递的参数从而改变父组件的渲染 */}
                <button
                    onClick={this.handleClick}
                    style={{
                        position: "absolute",
                        left: 350,
                        top: 350
                    }}
                >
                   子组件： 点我设置鼠标位置为x:50,y:50
                </button>
            </div>
        );
    }
}
export default WithMouse(Dog);