import React from "react";
import useWindowResize from "./useWindowResize";

const Window = () => {
    const { width, height } = useWindowResize();

    return (
        <div>
            <h3>拉伸你的页面，可以使 宽、高 值变化</h3>
            <div>宽：{width}</div>
            <div>高：{height}</div>
        </div>
    );
};

export default Window;
