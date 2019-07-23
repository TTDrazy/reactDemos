import React, { Component } from "react";

const scaleName = {
    c: "摄氏温度",
    f: "华氏温度"
};
export default class TemperatureInput extends Component {
    handleChange = e => {
        this.props.onTemperatureChange(e.target.value);
    };
    render() {
        const { temperature, scale } = this.props;
        return (
            <form>
                {/* 带边框的表单 */}
                <fieldset>
                    <legend>请输入{scaleName[scale]}的值：</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </form>
        );
    }
}
