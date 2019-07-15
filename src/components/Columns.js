import React, { Component } from "react";

export default class Columns extends Component {
    render() {
        const test = [
            { id: 1, content: "Hello 3" },
            { id: 2, content: "World 3" },
            { id: 3, content: "! 3" }
        ];
        return (
            <React.Fragment>
                <td style={{ border: "1px solid #000" }}>Hello 1</td>
                <td style={{ border: "1px solid #000" }}>World 1</td>
                <td style={{ border: "1px solid #000" }}>! 1</td>
                <React.Fragment>
                    {test.map(item => (
                        <td key={item.id} style={{ border: "1px solid #000" }}>
                            {item.content}
                        </td>
                    ))}
                </React.Fragment>
            </React.Fragment>
        );
    }
}
