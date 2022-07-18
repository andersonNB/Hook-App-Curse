import {useEffect, useState} from "react";
import FormWithCustomHooks from "./FormWithCustomHooks";
import Message from "./Message";

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "Caporal",
		email: "caporal@gmail.com",
	});

	//Los formularios su estado se maneja de manera distinta a otros componentes html
	const onInputChange = ({target}) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	useEffect(() => {
		// console.log("Esta cambiando el input del name");
	}, [formState.username, formState.email]);

	return (
		<>
			<h1>SimpleForm - componentes controlados</h1>

			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={formState.username}
				onChange={onInputChange}
			/>

			{formState.username === "Black Noir" && <Message />}
			<input
				type="email"
				className="form-control"
				placeholder="Ejemplo@correo.com"
				name="email"
				value={formState.email}
				onChange={onInputChange}
			/>

			<hr />
			<FormWithCustomHooks />
		</>
	);
};

export default SimpleForm;
