import {useLayoutEffect, useRef, useState} from "react";

const Quote = ({quote, author}) => {
	const pRef = useRef();

	const [boxSize, setBoxSize] = useState({width: 0, height: 0});

	useLayoutEffect(() => {
		// console.log(pRef.current.getBoundingClientRect());
		const {width, height} = pRef.current.getBoundingClientRect();
		setBoxSize({width, height});
	}, [quote]);

	/* Puede ser que la dependencia quote sea innecesaria
	   ya que en el componente MultipleCustomHooks, se 
	   crea y se destruye dependiendo de la condición,
	   Entonces no es necesario que siempre este pendiente
	   por que solo actuara cuando el componente exista
   */

	return (
		<>
			<blockquote className="blockquote text-end" style={{display: "flex"}}>
				<p ref={pRef} className="mb-1">
					{quote}{" "}
				</p>
				<footer className="blockquote-footer">{author} </footer>
			</blockquote>
			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};

export default Quote;
