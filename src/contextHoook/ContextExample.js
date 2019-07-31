import React, { useContext } from "react";
import LanuageContext from "../contextHoook/context/LanguageContext";
import StyleContext from "../contextHoook/context/StyleContext";
import Layout from "./Layout";

function ContextExample() {
    const { shape, introduce } = useContext(LanuageContext);
    const color = useContext(StyleContext);

    return (
        <>
            <Layout shape={shape} introduce={introduce} color={color} />
        </>
    );
}
export default ContextExample;
