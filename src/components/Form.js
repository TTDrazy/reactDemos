import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textContent: "",
            fruit: ""
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleClick = ()=>{
        const { title, textContent, fruit } = this.state;
        console.log('文章标题为'+title);
        console.log('文章内容为'+textContent);
        console.log('选择的水果为'+fruit);
    }
    render() {
        const { title, textContent, fruit } = this.state;
        return (
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="文章标题"
                    value={title}
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    name="textContent"
                    value={textContent}
                    placeholder="文章内容"
                    onChange={this.handleChange}
                />
                <br />
                <select name="fruit" value={fruit} onChange={this.handleChange}>
                    <option value="西柚">西柚</option>
                    <option value="橙子">橙子</option>
                    <option value="草莓">草莓</option>
                    <option value="羊角蜜">羊角蜜</option>
                    <option value="椰子">椰子</option>
                </select>
                <br />
                <button onClick={this.handleClick}>提交</button>
            </form>
        );
    }
}
