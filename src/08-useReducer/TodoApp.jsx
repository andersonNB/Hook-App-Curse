import {useTodo} from "../hooks";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

//Toda la logica (funcines, estadoINicial, hooks de react fueron trasladadas al customHooks useTodo)

const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		handleEditTodo,
	} = useTodo();

	return (
		<>
			<h2>
				TodoApp-useReducer: {todosCount}{" "}
				<small>pendientes: {pendingTodosCount} </small>
			</h2>

			<div className="row" style={{backgroundColor: "salmon"}}>
				<div className="col-7" style={{backgroundColor: "yellowgreen"}}>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
						onEditTodo={handleEditTodo}
					/>
				</div>
				<div className="col-5" style={{backgroundColor: "#3AB4F2"}}>
					<h4>Agregar TODO</h4>

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};

export default TodoApp;
