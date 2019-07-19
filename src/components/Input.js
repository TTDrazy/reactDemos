import React, { Component } from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.text = null;
    }
    //回调 Refs
       setRef = element => {
            this.text = element;
            console.log(this.text);
        };
        getFoucus = () => {
            if (this.text) {
                this.text.focus();
            }
        };
    componentDidMount() {
        //在组件被挂载完成后，执行函数，使input框自动获取焦点
        this.getFoucus();
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.setRef} />
                <input
                    type="button"
                    value="自动获得焦点"
                    onClick={this.getFoucus}
                />
            </div>
        );
    }
}
