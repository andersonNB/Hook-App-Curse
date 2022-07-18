import {useMemo, useState} from "react";
import {useCounter} from "../hooks";
import {Small} from "./Small";

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log("Ahi vamos");
	}

	return `${iterationNumber} iteaciones realizadas`;
};

const MemoHook = () => {
	const {counter, handelAdd} = useCounter(4000);

	const [show, setShow] = useState(true);

	console.log("Padre");

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>Memo Hook</h1>

			<h2>
				Counter:
				<Small value={counter} />
			</h2>

			<h3>{memorizedValue} </h3>

			<button onClick={handelAdd} className="btn btn-success">
				+1
			</button>

			<button className="btn btn-success" onClick={() => setShow(!show)}>
				Show/hide {JSON.stringify(show)}{" "}
			</button>
		</>
	);
};

export default MemoHook;
