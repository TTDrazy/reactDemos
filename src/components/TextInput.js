import React, { Component } from "react";
import HOCFunction from "./HOCComponent";

class TextInput extends Component {
    render() {
        const{innerRef} = this.props;
        return (
            <div>
                <input ref={innerRef} style={{width:'300px'}}/>
            </div>
        );
    }
}
export default HOCFunction(TextInput);