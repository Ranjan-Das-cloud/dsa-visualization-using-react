import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { HashRouter as Router } from "react-router-dom";

// HashRouter basically it uses the hash in the URL to render the component. Since I was building a static one-page website, I needed to use this.

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
