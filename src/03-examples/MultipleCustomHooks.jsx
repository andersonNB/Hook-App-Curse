import FocusScreen from "../04-useRef/FocusScreen";
import Layout from "../05-useLayoutEffect/Layout";
import CallBackHook from "../06-memos/CallBackHook";
import MemoHook from "../06-memos/MemoHook";
import Memorize from "../06-memos/Memorize";
import {Padre} from "../07-tarea-memo/Padre";
import {useFetch, useCounter} from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleCustomHooks = () => {
	const {counter, handelAdd} = useCounter(1);

	// Se puede llamar así desestructurando nada
	const state = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	// console.log("MUltipleCustomHooks: ", state);
	const {data, isLoading} = state;
	// console.log(data);

	const {quote, author} = !!data && data[0];

	// console.log(quote, " ", author);

	// o así
	// useFetch("https://url")
	//no hay problema, solo que por costumbre siempre se desestructura algo

	return (
		<>
			<h2>BreakingBad Quotes</h2>
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

			<hr />

			<FocusScreen />

			<hr />
			<Layout />

			<hr />

			<Memorize />

			<hr />
			<MemoHook />

			<hr />

			<CallBackHook />

			<hr />
			<Padre />
		</>
	);
};

export default MultipleCustomHooks;
