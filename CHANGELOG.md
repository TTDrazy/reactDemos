# 更新日志

## 1.0.3(2019.7.16)

---

> 1. Refs 转发（ [Refs 转发 branch](https://github.com/TTDrazy/reactDemos/tree/Refs%E8%BD%AC%E5%8F%91)）
>     - 修正了 1.0.2 版本中的 Refs 转发 branch 下的实例问题，并增添了新的示例
>     - **注意： 在 Refs 高阶组件的转发方式中，组件上不能直接出现属性 ref ，而应该以其他名称代替（否则只能取到组件而不是底层 DOM 节点）；只有在最底层的 DOM 节点时，才能直接出现属性 ref ！**
>
> 2. Ref & DOM（ [Ref 和 DOM branch](https://github.com/TTDrazy/reactDemos/tree/Refs%E8%BD%AC%E5%8F%91)）
>     - Ref 是 React 中提供的访问 DOM 节点的一种方式
>     - 适合使用 Ref 的情况：
>       - 管理焦点，文本选择或媒体播放
>       - 触发强制动画
>       - 集成第三方 DOM 库
>     - **避免使用 refs 来做任何可以通过声明式实现来完成的事情**
>     - 使用 React.createRef() 来创建 Ref ;引用 DOM 节点时，在该 DOM 节点下 ref 的 current 属性中获取
>     - 只有可以实例化的元素才可以 拥有 Ref，如 class 组件和 DOM 节点；而函数式组件则无法应用 Ref
>     - 回调 Ref 也是创建 Ref 的一种方式，但不同于传递 React.createRef() 的创建方式，他能让你精确控制传递的时间点。该回调函数接收一个真实 DOM 并操作。

## 1.0.2(2019.7.15)

---

> 1. Refs 转发（ [Refs 转发 branch](https://github.com/TTDrazy/reactDemos/tree/Refs%E8%BD%AC%E5%8F%91)）
>     - Refs 转发是一项将 refs 自动地通过组件传递到其一子组件的技巧
>     - 借用 React.forwardRef 和高阶组件的组合的方式实现
> 2. Fragments （ [Fragments branch](https://github.com/TTDrazy/reactDemos/tree/Fragments)）
>     - Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点
>     - 短语法 <></> , 虽然可以和 Fragments 一样无需向 DOM 添加额外节点，但是它不支持 key 或属性
> 3. JSX 基础 （ [ JSX 基础 branch](https://github.com/TTDrazy/reactDemos/tree/JSX%E5%9F%BA%E7%A1%80)）
>     - 在 JS 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用；还可以使 React 显示更多有用的错误和警告消息
>     - 可以通过使用引号，将属性值指定为字符串字面量；也可以使用大括号，在属性值中插入一个 JS 表达式
>     - React DOM 在渲染所有输入内容之前，默认会进行转义；可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击
>
> 4. 深入 JSX （ [深入 JSX branch](https://github.com/TTDrazy/reactDemos/tree/%E6%B7%B1%E5%85%A5JSX)）
>     - JSX 会编译为 React.createElement 调用形式
>     - 可以使用点语法来引用一个 React 组件
>     - 用户定义的组件必须以大写字母开头，否则编译为原生的 html 标签。（如果需要一个以小写字母开头的组件，则在使用之前，必须将它赋值给一个大写字母开头的变量）
>     - props 默认值为 “true”
>     - false , null , undefined , true 均不会被渲染（如果想渲染，可以将其转换为字符串）

## 1.0.1(2019.7.13)

---

> 1. React Snapshot 插件（ [页面静态化 branch](https://github.com/TTDrazy/reactDemos/tree/%E9%A1%B5%E9%9D%A2%E9%9D%99%E6%80%81%E5%8C%96)）
>     - 实现页面的静态化处理

## 1.0.0(2019.7.13)

---

主要是一些常用的插件集合起来的一个空的框架

> 1. 添加了 react-router-dom ,可以实现对路由的管理
>
> 2. 添加了 antD ,可以使 demo 界面更美观
> 3. 添加了 axios ,可以进行 Ajax 交互
