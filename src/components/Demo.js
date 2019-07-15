import React, { Component } from "react";
import Columns from "./Columns";
import CoulumnsSecond from "./CoulumnsSecond";

class Demo extends Component {
    render() {
        return (
            <table style={{ border: "1px solid #000" }}>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                    <tr>
                        <CoulumnsSecond />
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Demo;
