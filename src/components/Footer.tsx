/** @format */

import { NavLink } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
	return (
		<div className="footercont">
			<footer>
				<NavLink to={"https://x.com/Sol_Nexus?t=NN7uj7C14FYQ5AQJlXYgdQ&s=09"}>
					<FaXTwitter />
				</NavLink>

				<NavLink to={"https://github.com/QuaddBox"}>
					<FaGithub />
				</NavLink>

				<NavLink to={""}>
					<SiLinktree />
				</NavLink>
			</footer>
		</div>
	);
};

export default Footer;
