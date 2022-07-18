import {useEffect} from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import useForm from "../hooks/useForm";

const FormWithCustomHooks = () => {
	const {formState, onInputChange, onResetForm} = useForm({
		username: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		// console.log("Esta cambiando el input del name");
	}, [formState.username, formState.email]);

	return (
		<>
			<h1>Formulario con Custom Hooks</h1>

			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={formState.username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control"
				placeholder="Ejemplo@correo.com"
				name="email"
				value={formState.email}
				onChange={onInputChange}
			/>

			<input
				type="password"
				className="form-control"
				placeholder="contraseña"
				name="password"
				value={formState.password}
				onChange={onInputChange}
			/>

			<button className="btn btn-primary" onClick={onResetForm}>
				Reset
			</button>

			<hr />

			<MultipleCustomHooks />
		</>
	);
};

export default FormWithCustomHooks;
