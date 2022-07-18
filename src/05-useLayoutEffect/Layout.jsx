import {useFetch, useCounter} from "../hooks";
import {LoadingQuote, Quote} from "../03-examples";

const Layout = () => {
	const {counter, handelAdd} = useCounter(1);

	// Se puede llamar así desestructurando nada
	const state = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const {data, isLoading} = state;

	const {quote, author} = !!data && data[0];

	return (
		<>
			<h2>Layout - useLayoutEffect</h2>
			{state.isLoading ? (
				<LoadingQuote />
			) : (
				<Quote quote={quote} author={author} />
			)}

			<button
				className="btn btn-primary"
				disabled={isLoading}
				onClick={handelAdd}
			>
				Next quote
			</button>
		</>
	);
};

export default Layout;
