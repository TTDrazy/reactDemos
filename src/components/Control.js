import React, { Component } from "react";

class Control extends Component {
    constructor(props) {
        super(props);
        //表单使用费受控组件的方式来控制表单（应用 ref）
        this.inputRef = React.createRef();
        //<input type='file'/> 始终是一个非受控组件，其可以用 Ref 来进行控制 
        this.fileRef = React.createRef();
    }
    handleClick = () => {
        console.log("提交的text" + this.inputRef.current.value);
        console.log("提交的文件名" + this.fileRef.current.files[0].name);
    };
    render() {
        return (
            <form>
                <input type="text" ref={this.inputRef} defaultValue="Drazy" />
                <input type="file" ref={this.fileRef} />
                <button onClick={this.handleClick}>提交</button>
            </form>
        );
    }
}

export default Control;
