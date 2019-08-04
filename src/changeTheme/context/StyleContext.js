import React from "react";
import THEME from "../constants/theme";

const style = {
    color: THEME.BLUE
};
//赋给 Context 默认值
const StyleContext = React.createContext(style.color);
export default StyleContext;
