//命名导出，将原本命名导出的组件通过中间模块导出为默认模块，再由 React.lazy() 导入
export {MyComponent as default} from './NamedExports.js';