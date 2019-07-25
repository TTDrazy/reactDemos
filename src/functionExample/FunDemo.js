import React, { Component } from "react";
import { Button } from "antd";

class FunDemo extends Component {
    /* 为函数绑定组件实例有四种方式 */
    constructor(props) {
        super(props);
        //1. 在 constructor() 中利用 bind(this) 来绑定
        this.handleClickFirst = this.handleClickFirst.bind(this);
    }

    handleClickFirst() {
        alert("我是第一种绑定事件的方法");
    }
    //2. （ ❤  推荐）函数利用箭头函数实现，在 DOM 节点上直接绑定
    handleClickSecond = () => {
        alert("我是第二种绑定事件的方法");
    };
    handleClickThird() {
        alert("我是第三种绑定事件的方法");
    }
    handleClickFourth() {
        alert("我是第四种绑定事件的方法");
    }
    //(1).利用箭头函数传递参数
    handleClickPramsFirst(prams) {
        alert("我是第一种参数传递的方式，我的参数为：" + prams);
    }
    //(2).利用 data-attributes 传递参数
    handleClickPramsSecond=(e)=> {
        alert(
            "我是第二种参数传递的方式，我的参数为：" + e.target.dataset.prams
        );
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClickFirst}>
                    第一种
                </Button>
                <Button type="primary" onClick={this.handleClickSecond}>
                    第二种
                </Button>
                {/* 3. 在 DOM 节点上利用 bind(this) 来进行绑定 */}
                <Button
                    type="primary"
                    onClick={this.handleClickThird.bind(this)}
                >
                    第三种
                </Button>
                {/* 4. 在 DOM 节点上利用 箭头函数 来进行绑定 */}
                <Button type="primary" onClick={() => this.handleClickFourth()}>
                    第四种
                </Button>
                <Button onClick={() => this.handleClickPramsFirst("Drazy")}>
                    第一种传参
                </Button>
                <Button
                    data-Prams={"Mayige"}
                    onClick={this.handleClickPramsSecond}
                >
                    第二种传参
                </Button>
            </div>
            //  第一种方式会让constructor() 内过于繁杂，
            //  第三种和第四种会在组建的每次渲染时都创建新的函数，影响性能；
            //  因此推荐第二种
        );
    }
}
export default FunDemo;
