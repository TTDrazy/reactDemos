# 更新日志

## 1.0.9(2019.7.25)

---

> 1. FAQ（ [FAQ branch](https://github.com/TTDrazy/reactDemos/tree/FAQ)）
>     - AJAX 及 APIs
>         - 借助 AJAX 库，比如： Axios , JQuery AJAX ......
>         - 在 React 中，建议在 componentDidMount() 中发起 AJAX 请求。这样可以让拿到 AJAX 返回的数据并通过 setState() 来更新组件
>     - Bable, JSX 及 构建过程
>         - 在 React 中，可以不使用 JSX 和 ES6(+)；但不建议这样去做
>         - JSX 中的注释就是在{/* ...... */} 中去书写
>     - 在组件中使用事件处理函数
>         - 为函数绑定组件实例（无参）有四种方式
>            1. 在 constructor() 中利用 bind(this) 来绑定
>            2. （ ❤  推荐）函数利用箭头函数实现，在 DOM 节点上直接绑定
>            3. 在 DOM 节点上利用 bind(this) 来进行绑定
>            4. 在 DOM 节点上利用 箭头函数 来进行绑定
>            - 注意：第一种方式会让 constructor() 内过于繁杂，第三种和第四种会在组件的每次渲染时都创建新的函数，影响性能；因此推荐第二种 
>         - 为函数绑定组件实例（有参）有两种方式：
>            1. 通过箭头函数传参
>            2. 通过 data-attributes 传递参数（需要优化大量元素或使用依赖于  React.PureComponent 相等性检查的渲染树时使用）
>         - 阻止函数被调用太快或太多次有三种方式
>            1. 节流：基于时间的频率来进行抽样更改（利用 throttle()）
>            2. 防抖：一段时间的不活动之后发布更改（利用 debounce()）
>            3. requestAnimationFrame 节流：基于 requestAnimationFrame 的抽样更改（利用 rafSchedule ）
>     - 组件状态
>         - props 和 state 的区别
>            - props 是传递给组件的（类似于函数的形参），而 state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）
>         - 如果更新的 state 属性 又依赖于 state 
>            - 可以使用 setState()  的回调函数进行更新；也可以将 state 属性提取出来后经过处理再通过 setState() 直接更新  
>         - 在项目并不是很复杂的情况下，可以选择不用 Redux 或 Mobx 这样的 state 管理库
>     - 样式与 CSS
>         - 在 React 中，建议引用 className + 导入css文件来设置样式，而不是利用行内样式设置
>         - 在 React 中，可以使用 react-transition-group 和 react-motion 等库来实现动画
>     - 项目文章结构
>         - 按功能或路由组织（功能的定义因人而异）
>         - 按文件类型组织
>         - 注意事项
>            - 避免多层嵌套。尽量将单个项目中的目录嵌套层级控制在 3-4 个以内
>            - 不要过多思考。可以随着项目的进行再按需进行目录的结构调整
>     - Virtual DOM 及内核
>         - Virtual DOM 则是一种由 JS 类库基于浏览器 API 实现的概念
>         - 在这个概念中， UI 以一种“虚拟的”表现形式被存储于内存中，并且通过像 ReactDOM 等的类库能够使它与“真实的” DOM 进行同步，这一过程叫做协调


## 1.0.8(2019.7.24)

---

> 1. Context（ [Context branch](https://github.com/TTDrazy/reactDemos/tree/Context)）
>     - Context 是为了在全局使用某个数据（而不必显式的应用 porps 来进行逐层传递），如：语言，主题等
>     - 使用方式：
>         1. 利用 React.creatContext(defaultValue) 创建一个 Context
>         2. 利用 Context.Provider 将值传递给 Context.Consumer
>         3. 利用 Context.Consumer 中的函数拿到 Context.Provider 传递下来的值并完成渲染
>     - 使用时注意事项：
>         - Context.Provider 传值时只能传一个
>         - Context.Consumer 中只能接收一个函数，多余的内容会报 render() not a function 的错误
>     - Context 会使组建的复用性变差，**如果只是想避免层层嵌套传递属性，组件组合会比 Context 更好**
>     - 可以把 Context.Provider 内传递的值放在 state 内；这样的话，当每一次 Context.Provider 重新渲染时，Context.Consumer 内的组件也会更新

## 1.0.7(2019.7.23)

---

> 1. 状态提升 及 组合（ [状态提升及组合 branch](https://github.com/TTDrazy/reactDemos/tree/%E7%8A%B6%E6%80%81%E6%8F%90%E5%8D%87%E5%8F%8A%E7%BB%84%E5%90%88)）
>     - 状态提升
>         - 在 React 中，将多个组件中各自独立的 state 共同向上移动至他们最近的一个父级组件中，实现共享 state ，这叫做状态提升
>         - 虽然提升 state 的方式会比双向绑定写更多的‘样板代码’，但是由于数据是单向的，所以排除 bug 的时候可以定位到是哪个 props 出现了问题，并且直接定位到负责更新该 state 的组件，较为方便
>     - 组合
>         - 有些组件无法提前知道子组件的具体内容，可以用一个 props.children 为内容留空;这可以让其他组件通过 JSX 嵌套，将任意组件作为子组件传递给它们
>         - **React 中只有 props 和 组合，并无继承**
>
> 2. 代码分割（ [代码分割 branch](https://github.com/TTDrazy/reactDemos/tree/%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2)）
>     - 代码分割的最佳方式是通过动态 import() 语法
>     - 在组件内和路由中，都可以通过 React.lazy() 和 Suspense 相结合的方式来动态加载组件
>     - React.lazy 目前只支持默认导出（default exports），如果你需要导入命名导出的组件，可以将原本命名导出的组件通过中间模块导出为默认模块，再由 React.lazy() 导入
> 3. 协调（ [协调 branch](https://github.com/TTDrazy/reactDemos/tree/%E5%8D%8F%E8%B0%83)）
>     - Diffing算法
>         - 当对比两棵树时， React 会先比较根节点
>         - 当对比两个相同节点时， React 只对比有变化的属性
>         - 在子元素列表末尾新增元素的话，性能会更好
>         - React 使用 key 来使用匹配原有树上及新树上的子元素，key 尽量不要使用不稳定的值（例如 Math.random()）,否则会导致不必要的组件和 DOM 元素被创建
> 4. 非受控组件（ [非受控组件 branch](https://github.com/TTDrazy/reactDemos/tree/%E9%9D%9E%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6)）
>     - 受控组件与非受控组件的区别是：组件内是否有自己的 state
>     - 表单数据一般应用受控组件的方式来进行处理（非受控组件的话可以用 Ref 结合来实现）
>     - 赋予组件初始值时，可以使用 defaultValue 来赋值
>     - 在 React 中，<input type='file'/> 始终是一个非受控组件，其可以用 Ref 来进行控制 

## 1.0.6(2019.7.22)

---

> 1. 静态类型检查（ [静态类型检查 branch](https://github.com/TTDrazy/reactDemos/tree/%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5)）
>     - 可以使用 Flow , Typescript , PropTypes（PropTypes 处于性能考虑，仅在开发模式下进行）等
> 2. 列表 及 表单（ [列表及表单 branch](https://github.com/TTDrazy/reactDemos/tree/%E5%88%97%E8%A1%A8%E5%8F%8A%E8%A1%A8%E5%8D%95)）
>     - 列表 & key
>         - key 是帮助 React 的 diff 算法的
>         - **key 一般用于 map() 方法中的元素** ; 如果一个 map() 内嵌套层级过多，建议提取组件
>     - 表单
>         - 运用 state ,name,onChange 可以实现基本需求


## 1.0.5(2019.7.19)

---
> 1. render props（ [renderProps branch](https://github.com/TTDrazy/reactDemos/tree/renderProps)）
>     - render prop 是一个用于告知组件需要渲染什么内容的函数 prop
>     - 在父组件里通过 this.props.render() 来确定向下传递需要的参数，在调用处的父组件里用 render()  方法来传入确定好的参数给子组件，即可实现子组件里根据参数动态渲染界面的功能
>     - 使用 render prop 会抵消 React.pureComponent 的优势
>
> 2. Ref & DOM（ [Ref 和 DOM branch](https://github.com/TTDrazy/reactDemos/tree/Ref%E5%92%8CDOM)）
>     - 修正了 1.0.3 版本中的Ref 和 DOM branch 下原始示例中函数在构造器中的错误声明方式




## 1.0.4(2019.7.17)

---

> 1. 事件处理 及 条件渲染（ [事件及条件渲染 branch](https://github.com/TTDrazy/reactDemos/tree/%E4%BA%8B%E4%BB%B6%E5%8F%8A%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)）
>     - 事件命名用小驼峰法，在 JSX 语法里传入的是一个函数
>     - 节点不能通过返回 flase 来阻止默认行为，而应该调用 preventDefault()
>     - 绑定事件
>         - 无参
>            - 事件函数用箭头函数，能够直接保证 this 的指向
>            - 用普通函数 , 则需要 bind(this) 来传递 this 给函数，否则普通函数内部因为 this 指向问题报错
>         - 有参
>            - 利用箭头函数传递所需参数 和 e
>            - 利用.bind() 传递 this 和 所需参数
>     - 条件渲染时可以先把动态的部分提取到一个变量中，再进行判断后直接插入到 JSX 语法中

## 1.0.3(2019.7.16)

---

> 1. Refs 转发（ [Refs 转发 branch](https://github.com/TTDrazy/reactDemos/tree/Refs%E8%BD%AC%E5%8F%91)）
>     - 修正了 1.0.2 版本中的 Refs 转发 branch 下的实例问题，并增添了新的示例
>     - **注意： 在 Refs 高阶组件的转发方式中，组件上不能直接出现属性 ref ，而应该以其他名称代替（否则只能取到组件而不是底层 DOM 节点）；只有在最底层的 DOM 节点时，才能直接出现属性 ref ！**
> 2. Ref & DOM（ [Ref 和 DOM branch](https://github.com/TTDrazy/reactDemos/tree/Ref%E5%92%8CDOM)）
>     - Ref 是 React 中提供的访问 DOM 节点的一种方式
>     - 适合使用 Ref 的情况：
>         - 管理焦点，文本选择或媒体播放
>         - 触发强制动画
>         - 集成第三方 DOM 库
>     - **避免使用 refs 来做任何可以通过声明式实现来完成的事情**
>     - 使用 React.createRef() 来创建 Ref ;引用 DOM 节点时，在该 DOM 节点下 ref 的 current 属性中获取
>     - 只有可以实例化的元素才可以 拥有 Ref，如 class 组件和 DOM 节点；而函数式组件则无法应用 Ref
>     - 回调 Ref 也是创建 Ref 的一种方式，但不同于传递 React.createRef() 的创建方式，他能让你精确控制传递的时间点。该回调函数接收一个真实 DOM 并操作。
> 3. Rreact 状态（ [Rreact 状态 branch](https://github.com/TTDrazy/reactDemos/tree/React%E7%8A%B6%E6%80%81)）
>     - props 主要是为了能够将父组件中的属性或者方法传递给子组件
>     - **所有的 React 组件都必须像纯函数一样使它们的 props 不被修改**
>     - UI 界面渲染更新有两种方式：
>         - 通过 ReactDOM.render() 来修改某个元素
>         - 通过每个组件的状态 state 的改变来更新 UI 界面的渲染(每个组件的 state 都是彼此独立的)
>     - 初始化 state 应该在构造函数中进行，更新 state 应该使用 setState() 来赋值
>     - 当你调用 setState() 的时候，React 会将你提供的对象合并到当前的 state
>     - React 生命周期
>         - static getDerivedStateFromProps(nextProps, prevState) ，组件实例化后和接受新属性时调用
>         - componentWillMount() ，组件装配前立刻调用，在 render()之前
>         - render() ，不改变组件状态，不与浏览器交互
>         - componentDidMount() ，组件装配后立刻调用
>         - componentWillUpdate() ，组件接收到新属性或状态时，渲染前立刻调用 
>         - componentDidUpdate() ， 组件更新发生后立刻调用
>         - componentWillUnmount() ， 组件被卸载和销毁之前立刻调用

## 1.0.2(2019.7.15)

---

> 1. Refs 转发（ [Refs 转发 branch](https://github.com/TTDrazy/reactDemos/tree/Refs%E8%BD%AC%E5%8F%91)）
>     - Refs 转发是一项将 refs 自动地通过组件传递到其一子组件的技巧
>     - 借用 React.forwardRef 和高阶组件的组合的方式实现
> 2. Fragments （ [Fragments branch](https://github.com/TTDrazy/reactDemos/tree/Fragments)）
>     - Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点
>     - 短语法 <></> , 虽然可以和 Fragments 一样无需向 DOM 添加额外节点，但是它不支持 key 或属性
> 3. JSX 基础 （ [ JSX 基础 branch](https://github.com/TTDrazy/reactDemos/tree/JSX%E5%9F%BA%E7%A1%80)）
>
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
