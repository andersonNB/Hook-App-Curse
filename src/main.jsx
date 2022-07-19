import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
// import HooksApp from "./HooksApp";
// import "./08-useReducer/intro-reducer";
// import TodoApp from "./08-useReducer/TodoApp";
import MainApp from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	</React.StrictMode>
);
