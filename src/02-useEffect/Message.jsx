import {useEffect, useState} from "react";

const Message = () => {
	const [coords, setCoords] = useState({x: 0, y: 0});

	useEffect(() => {
		console.log("Componente Montado");

		//Para limpiar algo debemos hacer referencia
		// a la función de ese listener
		const onMouseMove = ({x, y}) => {
			const coords = {x, y};
			console.log(coords);
			setCoords(coords);
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => {
			console.log("Componente Desmontado");
			//En este return cancelamos al listener

			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h2>Usuario ya existe o.O</h2>
			<p>{JSON.stringify(coords)}</p>
		</>
	);
};

export default Message;
