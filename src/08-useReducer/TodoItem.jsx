import TodoEdit from "./TodoEdit";

const TodoItem = ({todo, onDeleteTodo, onToggleTodo, onEditTodo}) => {
	return (
		<>
			<li className="list-group-item d-flex justify-content-between">
				<span
					className={`align-self-center ${
						todo.done ? "text-decoration-line-through" : ""
					}`}
					onClick={() => onToggleTodo(todo.id)}
				>
					{todo.description}{" "}
				</span>
				<TodoEdit
					onEditTodo={onEditTodo}
					onDeleteTodo={onDeleteTodo}
					todo={todo}
				/>
			</li>
		</>
	);
};

export default TodoItem;
