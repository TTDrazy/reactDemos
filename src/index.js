import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import TodoList from "./todoList/TodoList";
import HelloHook from "./components/HelloHook"
import ContextHook from "./changeTheme/pages/ContextHook";

ReactDOM.render(
    <Router>
        <App>
            <Route path="/" exact component={Index} />
            <Route path = "/Hook" exact component={HelloHook}></Route>
            <Route path="/Hook/todoList" component={TodoList}></Route>
            <Route path="/Hook/changeTheme" component={ContextHook}></Route>
        </App>
        
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
