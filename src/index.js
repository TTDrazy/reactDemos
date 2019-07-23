import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//在路由中使用了 React.lazy() 和 Suspense 相结合的动态加载组件
const Calculate = lazy(() => import("./components/Calculate.js"));
ReactDOM.render(
    <Router>
        <Suspense fallback={<div>正在加载中......</div>}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/calculate" component={Calculate} />
            </Switch>
        </Suspense>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
