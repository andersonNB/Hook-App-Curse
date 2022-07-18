import React from "react";
import ReactDOM from "react-dom/client";
// import HooksApp from "./HooksApp";
// import "./08-useReducer/intro-reducer";
import "./index.css";
import TodoApp from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TodoApp />
	</React.StrictMode>
);
