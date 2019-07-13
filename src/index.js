import React from "react";
import { render } from 'react-snapshot';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
