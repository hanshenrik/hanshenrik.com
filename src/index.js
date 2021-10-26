import React from "react";
import ReactDOM from "react-dom";
import "typeface-muli";
import smoothscroll from "smoothscroll-polyfill";

import "./assets/react-accessible-accordion.css";
import "./index.css";
import App from "./App";

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById("root"));
