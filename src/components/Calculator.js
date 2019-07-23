import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            scale: "c"
        };
    }
    //将华氏温度转为摄氏温度
    toCelsius = fahrenheit => {
        return ((fahrenheit - 32) * 5) / 9;
    };
    //将摄氏温度转为华氏温度
    toFahrenheit = celsius => {
        return (celsius * 9) / 5 + 32;
    };
    handleCelsiusChange = (temperature)=> {
        this.setState({
            temperature: temperature,
            scale: "c"
        })
    };
    handleFahrenheitChange = (temperature)=> {
        this.setState({
            temperature: temperature,
            scale: "f"
        })
    };
    render() {
        const { scale, temperature } = this.state;
        let celsius =
            scale === "f"
                ? this.toFahrenheit(parseFloat(temperature))
                : temperature;
        let fahrenheit =
            scale === "c"
                ? this.toCelsius(parseFloat(temperature))
                : temperature;
        if(!fahrenheit){
            fahrenheit = 0;
        }
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;
