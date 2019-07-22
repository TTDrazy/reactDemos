import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropTypesEx extends Component {
    render() {
        return <h1>Hello,{this.props.name}{this.props.children}</h1>;
    }
}
let Message = {
    id: PropTypes.number.isRequired, //如果 id 不被提供，会警告
    name: PropTypes.string,
    age: PropTypes.number
};
//处于性能原因，类型检查仅在开发模式下进行
//指定 props 里的默认值
PropTypes.defayltProps = {
    name:'Drazy'
}
PropTypesEx.propTypes = {
    name: PropTypes.string,
    //确保传递给组建的 children 中只包含一个元素
    children: PropTypes.element.isRequired,
    //特定的 JS 类型 （Array,boolean,function,number,object,string,symbol）
    optionArray: PropTypes.bool,
    optionFun: PropTypes.func,
    optionNumber: PropTypes.number,
    optionObject: PropTypes.object,
    optionString: PropTypes.string,
    optionSymbol: PropTypes.symbol,

    //任何可被渲染的元素(数字，字符串，元素或数组，Fragment...)
    optionNode: PropTypes.node,
    //React 元素
    optionElement: PropTypes.element,
    //React 元素类型(component)
    optionElementType: PropTypes.elementType,
    //可以自己声明一种自定义类型
    optionMessage: PropTypes.instanceOf(Message),
    //一个对象可以是几种类型中的任意一种
    optionUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),
    //一个数组均由某一类型的元素组成
    optionArrayOf: PropTypes.arrayOf(PropTypes.number),
    //一个对象均由某一类型的元素组成
    optionObjectOf: PropTypes.objectOf(PropTypes.number),
    //一个对象由特定的类型组成
    optionObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),
    //任意类型的数据
    optionAny: PropTypes.any
};
