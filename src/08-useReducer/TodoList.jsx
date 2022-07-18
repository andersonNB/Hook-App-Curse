import TodoItem from "./TodoItem";

const TodoList = ({todos = [], onDeleteTodo, onToggleTodo, onEditTodo}) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => {
				// console.log("x: ", todo.description);
				return (
					<TodoItem
						key={todo.id.toString()}
						todo={todo}
						onDeleteTodo={onDeleteTodo}
						onToggleTodo={onToggleTodo}
						onEditTodo={onEditTodo}
					/>
				);
			})}
		</ul>
	);
};
export default TodoList;
