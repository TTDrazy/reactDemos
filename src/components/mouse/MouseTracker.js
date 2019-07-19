import React, { Component } from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";
import Dog from "./Dog";

export default class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>移动鼠标</h1>
                {/* 通过 props render 传递参数 mousePosition */}
                <Mouse
                    render={mousePosition => (
                        <Cat mousePosition={mousePosition} />
                    )}
                />
                {/* 通过 HOC 的方式来传递 */}
                <Dog></Dog>
            </div>
        );
    }
}
