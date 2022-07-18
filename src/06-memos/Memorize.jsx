import {useState} from "react";
import {useCounter} from "../hooks";
import {Small} from "./Small";

const Memorize = () => {
	const {counter, handelAdd} = useCounter();

	const [show, setShow] = useState(true);

	return (
		<>
			<h1>Memorize</h1>

			<h2>
				Counter:
				<Small value={counter} />
			</h2>

			<button onClick={handelAdd} className="btn btn-success">
				+1
			</button>

			<button className="btn btn-success" onClick={() => setShow(!show)}>
				Show/hide {JSON.stringify(show)}{" "}
			</button>
		</>
	);
};

export default Memorize;
