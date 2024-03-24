/** @format */
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const UserRoot = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default UserRoot;
