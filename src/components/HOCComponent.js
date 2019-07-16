import React from "react";

//使用高阶组件的方式转发Refs
function HOCFunction(WrappedComponent) {
    class HOCComponent extends React.Component {
        render() {
            const { forwardedRef, ...rest } = this.props;

            return <WrappedComponent innerRef={forwardedRef} {...rest} />;
        }
    }
    return React.forwardRef((props, ref) => {
        return <HOCComponent {...props} forwardedRef={ref} />;
    });
}
export default HOCFunction;
