import React from "react";

//使用高阶组件的方式转发Refs
function HOCFunction(WrappedComponent) {
    class HOCComponent extends React.Component {
        componentDidUpdate(prevProps) {
            console.log("old props:", prevProps);
            console.log("new props:", this.props);
        }
        render() {
            const { forwardedRef, ...rest } = this.props;

            // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }

    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 HOCComponent，例如 “forwardedRef”
    // 然后它就可以被挂载到被 HOCComponent 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <HOCComponent {...props} forwardedRef={ref} />;
    });
}
export default HOCFunction;
