/** @format */

import { NavLink } from "react-router-dom";
import logo from "../assets/solnexus.png";
import { Image } from "@mantine/core";

import { RiMenu2Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import Navmenu from "./Navmenu";
import { useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const showMenu = () => {
		setMenu((prevmenu) => !prevmenu);
	};

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
				<div className="navmenu-icon" onClick={showMenu}>
					{!menu ? <RiMenu2Line /> : <LiaTimesSolid />}
				</div>
			</div>

			<div className="navmenu-modal">{menu && <Navmenu />}</div>
		</nav>
	);
};

export default Navbar;
