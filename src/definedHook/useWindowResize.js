import { useState, useEffect } from "react";

function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const resizeFunction = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeFunction);
        return () => {
            //在组件卸载时销毁不必要的变量
            window.removeEventListener("resize", resizeFunction);
        };
    }, []);

    return { width, height };
}

export default useWindowResize;
