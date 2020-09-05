import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
serviceWorker.unregister();
