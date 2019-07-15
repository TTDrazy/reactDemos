# 更新日志
## 1.0.0(2019.7.13) 
------
主要是一些常用的插件集合起来的一个空的框架
> 1. 添加了 react-router-dom ,可以实现对路由的管理
> 2. 添加了 antD ,可以使 demo 界面更美观
> 3. 添加了 axios ,可以进行Ajax交互

## 1.0.1(2019.7.13) 
------
> 1. React Snapshot 插件（ 页面静态化 branch）
>    * 实现页面的静态化处理

## 1.0.2(2019.7.15) 
------
> 1. Refs 转发（ Refs转发 branch）
>    * Refs 转发是一项将 refs 自动地通过组件传递到其一子组件的技巧
>    * 借用 React.forwardRef 和高阶组件的组合的方式实现
> 2. Fragments （ Fragments branch）
>    * Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点
>    * 短语法 <></> , 虽然可以和 Fragments一样无需向 DOM 添加额外节点，但是它不支持 key 或属性
> 3. 深入 JSX （ 深入JSX branch）
>    * JSX 会编译为 React.createElement 调用形式
>    * 可以使用点语法来引用一个 React 组件
>    * 用户定义的组件必须以大写字母开头，否则编译为原生的 html 标签。（如果你确实需要一个以小写字母开头的组件，则在 JSX 中使用它之前，必须将它赋值给一个大写字母开头的变量。）
>    * props 默认值为 “true”
>    * false ,  null , undefined , true 均不会被渲染（如果想渲染，可以将其转换为字符串）
