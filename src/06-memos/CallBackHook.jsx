import {useCallback, useState} from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	// const increment = useCallback(() => {
	// 	console.log("Memorice");
	// 	setCounter((value) => value + 1);
	// }, []);

	//Callback con argumentos
	const increment = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	/**
	 * Lo que hace este efecto es dispararse cuando la función cambie en algún momento
	 * por se debe tener el memo dentro de componente que queremos que no cambie, de lo contrario
	 * creamos un ciclo infinito con el efecto
	 * useEffect(()=>{
	 *  increment();
	 * }[increment])
	 */

	return (
		<>
			<h2>useCallback hook: {counter} </h2>
			{/* Nombre properti = {valor properti} */}
			<ShowIncrement increment={increment} />
		</>
	);
};

export default CallBackHook;
