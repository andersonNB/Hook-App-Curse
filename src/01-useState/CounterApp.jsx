import {useState} from "react";
import useCounter from "../hooks/useCounter";

const CounterApp = () => {
	// Se puede utlizar el objeto counter de muchas maneras por ejemplo
	// counter.propiedad o desestructurar {prop1,prop2 ...etc}
	const [{counter1, counter2, counter3}, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	//Creamos un useState personalizado customHook

	const {counter, handelAdd, handleSubs, hardReset} = useCounter();

	const prueba = () => handleSubs(2);

	return (
		<>
			<h2>Counter1: {counter1}</h2>
			<h2>Counter2: {counter2}</h2>
			<h2>Counter3: {counter3}</h2>

			<button
				className="btn btn-primary"
				onClick={() =>
					setCounter({
						counter1: counter1 + 1,
						counter2: counter2 + 1,
						counter3: counter3 + 1,
					})
				}
			>
				+1
			</button>

			<hr />
			<h2>Counter with Custom Hook: {counter} </h2>
			<button className="btn btn-warning" onClick={handelAdd}>
				+1
			</button>
			<button className="btn btn-warning" onClick={prueba}>
				-1
			</button>
			<button className="btn btn-warning" onClick={hardReset}>
				Reset
			</button>
		</>
	);
};

export default CounterApp;
