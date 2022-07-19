import {Routes, Route, Navigate, Link} from "react-router-dom";
import {HomePage, AboutPage, LoginPage, Navbar} from "./index";

const MainApp = () => {
	return (
		<>
			<h1>MainApp</h1>

			<Navbar />

			<hr />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="login" element={<LoginPage />} />

				{/* Una forma 
                    /* -> Este comodin es para cuando no hay match en las rutas
                    no limpia la ruta
                */}
				{/* <Route path="/*" element={<LoginPage />} /> */}

				{/* Segunda forma
                    Utilizando el Navigate literalmente cuando no hay match nos regresa a la rutas
                    predeterminada y limpia la url
                 */}
				<Route path="/*" element={<Navigate to="/about" />} />
			</Routes>
		</>
	);
};

export default MainApp;
