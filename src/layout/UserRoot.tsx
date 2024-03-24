/** @format */
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const UserRoot = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default UserRoot;
