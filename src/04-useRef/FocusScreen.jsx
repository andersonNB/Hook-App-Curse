import {useRef} from "react";

const FocusScreen = () => {
	const inputRef = useRef();

	console.log(inputRef);

	const onClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h2>FocusScreen</h2>
			<input
				ref={inputRef}
				type="text"
				placeholder="Digite su nombre"
				className="form-control"
			/>

			<button className="btn btn-primary mt-2" onClick={onClick}>
				Seleccionar
			</button>
		</>
	);
};

export default FocusScreen;
