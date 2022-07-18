// import {useState} from "react";
import {useForm} from "../hooks";

const TodoAdd = ({onNewTodo}) => {
	const {description, onInputChange, onResetForm} = useForm({description: ""});

	console.log("Valor desestructurado:", description);

	//COmo lo plantee la primera vez
	// const onChangeInput = (e) => {
	// 	const {target} = e;
	// 	// console.log(target.value);
	// 	setInput(target.value);
	// };

	// const onSubmit = (e) => {
	// 	e.preventDefault();

	// 	onNewTodo(input);
	// };

	const onFormSubmit = (e) => {
		e.preventDefault();

		console.log("description: ", description);

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description,
		};

		//SI existe manda la info
		onNewTodo && onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="¿Que hay que hacer?"
				className="form-control"
				name="description"
				value={description}
				onChange={onInputChange}
			/>

			<button type="submit" className="btn btn-warning mt-1">
				Agregar
			</button>
		</form>
	);
};

export default TodoAdd;
