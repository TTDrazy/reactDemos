import React, { Component } from "react";

export default class Layout extends Component {
    render() {
        const { shape, introduce, color } = this.props;
        //console.log(shape,introduce,color);
        return (
            <div>
                <span>它的形状是：{shape}</span>
                <br />
                <span>{introduce}</span>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color
                    }}
                />
                <input
                    style={{
                        width: "100px",
                        borderColor: color
                    }}
                />
            </div>
        );
    }
}
