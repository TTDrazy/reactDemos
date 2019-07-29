import React from "react";
//赋给 Context 默认值
const LanuageContext = React.createContext({
    shape: "方块",
    introduce: "这是一个 Div。"
});

export default LanuageContext;
