import React, { Component } from "react";

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }
    handleMouseMove = event => {
        //设置鼠标的位置
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };
    handleClick = () => {
        this.setState({
            x:50,
            y:50
        })
    }
    render() {
        const { x, y } = this.state;
        return (
            <>
                <div
                    style={{
                        width: "300px",
                        height: "300px",
                        backgroundColor: "pink",
                        marginLeft: "3%"
                    }}
                    onMouseMove={this.handleMouseMove}
                >
                    <p>
                        现在的鼠标位置为：
                        <div>X:{x}</div>
                        <div>Y:{y}</div>
                    </p>
                    {/* 通过 props.render 的方式来共享数据 this.state */}
                    {this.props.render(this.state)}
                </div>
                {/* 父组件可以通过改变传递的参数的变化从而引起子组件的动态渲染 */}
                <button onClick={this.handleClick}>
                   父组件： 点我设置鼠标位置为x:50,y:50
                </button>
            </>
        );
    }
}

export default Mouse;
