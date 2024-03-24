/** @format */

import { NavLink } from "react-router-dom";

const Navmenu = () => {
	return (
		<div className="nav-menu-links">
			<NavLink to={"about"}>About us</NavLink>
			<NavLink to={"https://solnexus.gitbook.io/solnexus/"}>whitepaper</NavLink>
		</div>
	);
};

export default Navmenu;
