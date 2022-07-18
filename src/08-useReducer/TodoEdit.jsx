import {useForm} from "../hooks";

const TodoEdit = ({onEditTodo, onDeleteTodo, todo}) => {
	const {inputEdit, onInputChange, onResetForm} = useForm({inputEdit: ""});

	const onFormSubmit = (idTodo) => {
		//EL useForm ya hace la logica de obtener el valor del campo

		console.log("id :", idTodo, " texto: ", inputEdit);

		onEditTodo(idTodo, inputEdit);
		onResetForm();
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onFormSubmit(todo.id);
				}}
			>
				<label className="form-label">Editar</label>
				<input
					className="form-control"
					type="text"
					placeholder="Ingresar el nuevo texto"
					name="inputEdit"
					value={inputEdit}
					onChange={onInputChange}
				/>
			</form>
			<button
				className="btn btn-danger mt-2"
				onClick={() => onDeleteTodo(todo.id)}
			>
				borrar
			</button>
		</div>
	);
};

export default TodoEdit;
