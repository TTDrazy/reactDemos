import React, { Component } from "react";
import LanuageContext from "../context/LanguageContext";
import StyleContext from "../context/StyleContext";
import Layout from "./Layout";

export default class ContextExample extends Component {
    render() {
        return (
            <>
             {/* 2.利用 Consumer 将 Provider 传递给 Context 的值获取到 */}
                <LanuageContext.Consumer>
                     {/* 注意：Consumer 中只能接收一个函数，多余的会报render() not a function 的错误 */}
                    {({ shape, introduce }) => (
                        <StyleContext.Consumer>
                            {( color ) => {
                                return (
                                    <Layout
                                        shape={shape}
                                        introduce={introduce}
                                        color={color}
                                    />
                                );
                            }}
                        </StyleContext.Consumer>
                    )}
                </LanuageContext.Consumer>
            </>
        );
    }
}
