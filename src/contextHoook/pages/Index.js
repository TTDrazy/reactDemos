import React, { Component } from "react";
import LanuageContext from "../context/LanguageContext";
import StyleContext from "../context/StyleContext";
import ContextExample from "../components/ContextExample";
import THEME from "../components/context/constants/theme";
import Language from "../components/context/local/index";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: THEME.YELLOW,
            language: Language.Chinese
        };
    }
    handleLanguageClick = () => {
        this.setState({
            language: Language.English
        });
    };
    handleStyleClick = () => {
        this.setState({
            color: THEME.PINK
        });
    };
    render() {
        const { color, language } = this.state;
        return (
            <div>
                {/* 1.利用 Provider 将值传递给所有 Context */}
                {/* 注意：Provider 传值时只能传一个！ */}
                <LanuageContext.Provider value={language}>
                    <StyleContext.Provider value={color}>
                        <ContextExample />
                        <ContextExample />
                    </StyleContext.Provider>
                </LanuageContext.Provider>
                <ContextExample />
                <button onClick={this.handleLanguageClick}>切换英文</button>
                <button onClick={this.handleStyleClick}>切换主题</button>
            </div>
        );
    }
}
