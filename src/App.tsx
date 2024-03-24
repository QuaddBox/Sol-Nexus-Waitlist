/** @format */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import UserRoot from "./layout/UserRoot";
import { About, Home } from "./pages";

import "./App.scss";
import "@mantine/core/styles.css";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<UserRoot />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
			</>,
		),
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
