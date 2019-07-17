import React, { Component } from "react";
import { Button } from "antd";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }
    toggleBox = () => {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        });
    };
    toggleBox2  () {
        const { isShow } = this.state;
        this.setState({
            isShow: !isShow
        });
    };
    preventLink = () => {
        console.log("我被点击啦");
    };
    render() {
        const { isShow } = this.state;
        //根据条件动态渲染
        let Box;
        if (isShow) {
            Box = (
                <div
                    style={{
                        width: "200px",
                        height: "200px",
                        backgroundColor: "pink",
                        lineHeight: "200px",
                        textAlign:'center'
                    }}
                >
                    我是元素
                </div>
            );
        } else {
            Box = <></>;
        }
        return (
            <div>
                {/* 通过箭头函数直接绑定事件 */}
                <Button type="primary" onClick={this.toggleBox}>
                    {isShow ? "隐藏" : "显示"}
                </Button>
                {/* 通过普通函数和 bind() 来绑定事件
                    不传入 this 会导致函数内部取不到 this 而报错
                */}
                <Button type="primary" onClick={this.toggleBox2.bind(this)}>
                    {isShow ? "隐藏" : "显示"}
                </Button>
                {/* 根据条件动态渲染 */}
                {Box}
                <br />
                <a
                    href="https://www.baidu.com"
                    // 阻止默认跳转新的页面
                    onClick={this.preventLink}
                >
                    我是链接
                </a>
            </div>
        );
    }
}

export default Demo;
