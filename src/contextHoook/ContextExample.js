import React, {useContext} from "react";
import LanuageContext from "../context/LanguageContext";
import StyleContext from "../context/StyleContext";
import Layout from "./Layout";

// export default function ContextExample {
//         return (
//             <>
//              {/* 2.利用 Consumer 将 Provider 传递给 Context 的值获取到 */}
//              { useContext(LanuageContext)}
//                      {/* 注意：Consumer 中只能接收一个函数，多余的会报render() not a function 的错误 */}
//                     {({ shape, introduce }) => (
//                         {useContext(StyleContext)=>{}
//                             ( color ) => {
//                                 return (
//                                     <Layout
//                                         shape={shape}
//                                         introduce={introduce}
//                                         color={color}
//                                     />
//                                 );
//                             }}
//                     )}
//             </>
//         );
// }
