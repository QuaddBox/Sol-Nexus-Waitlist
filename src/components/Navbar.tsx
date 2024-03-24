/** @format */

import { NavLink } from "react-router-dom";
import logo from "../assets/solnexus.png";
import { Image } from "@mantine/core";

const Navbar = () => {
	return (
		<nav>
			<div className="navcontents">
				<div className="logo">
					<NavLink to={"."}>
						<Image src={logo} width={"80px"} h={"80px"} />
					</NavLink>
				</div>
				<div className="navlinks">
					<NavLink to={"about"}>About Us</NavLink>

					<NavLink
						to={"https://solnexus.gitbook.io/solnexus/"}
						className="whitepaper">
						Whitepaper
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
