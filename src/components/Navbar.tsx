/** @format */

import { NavLink } from "react-router-dom";
import logo from "../assets/solnexus.png";

import { Image, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { RiMenu2Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { FaSpotify } from "react-icons/fa";

import Navmenu from "./Navmenu";
import { useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const showMenu = () => {
		setMenu((prevmenu) => !prevmenu);
	};

	const [opened, { open, close }] = useDisclosure(false);

	return (
		<nav>
			<div className="navcontents">
				<div className="logo">
					<NavLink to={"."}>
						<Image src={logo} width={"80px"} h={"80px"} />
					</NavLink>
				</div>

				<div className="navwrp">
					<Modal
						opened={opened}
						onClose={close}
						centered
						transitionProps={{
							transition: "fade",
							duration: 600,
							timingFunction: "linear",
						}}
						className="modal">
						<h1 className="modalhead-text">
							Listen to our dev's playlist while you wait
						</h1>
						<div className="modalbtn">
							<iframe
								src="https://open.spotify.com/embed/playlist/5e7S1ZKrEpBqoxyOG4opBl?utm_source=generator&theme=0"
								width="100%"
								height="352"
								frameBorder="0"
								allowFullScreen
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"></iframe>
						</div>
					</Modal>
					<div className="spotify">
						<Button bg={"none"} onClick={open}>
							<FaSpotify fontSize={"25px"} color="#1DB954" cursor={"pointer"} />
						</Button>
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
				<div className="navmenu-icon" onClick={showMenu}>
					{!menu ? <RiMenu2Line /> : <LiaTimesSolid />}
				</div>
			</div>

			<div className="navmenu-modal">{menu && <Navmenu />}</div>
		</nav>
	);
};

export default Navbar;
