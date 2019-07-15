import React from "react";

//使用非高阶组件的方式转发Refs
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

export default FancyButton;
