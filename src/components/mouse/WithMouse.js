import React, { Component } from "react";
import Mouse from "./Mouse";

function WithMouse(MyComponent) {
    return class extends Component {
        render() {
            console.log()
            return (
                <Mouse
                    render={mousePosition => (
                        
                        <MyComponent
                            {...this.props}
                            mousePosition={mousePosition}
                        />
                    )}
                />
            );
        }
    };
}

export default WithMouse;
