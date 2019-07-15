import React, { Component } from "react";
import HOCFunction from "./HOCComponent";

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.textRef= React.createRef();
    }
    setInputValue(value) {
        this.textRef.current.value = value;
    }
    render() {
        return (
            <div>
                <input ref={this.textRef} style={{width:'300px'}}/>
            </div>
        );
    }
}
export default HOCFunction(TextInput);