/** @format */

import { Box, Button, Flex, Image, Input, Loader } from "@mantine/core";

import logo from "../assets/solnexus.gif";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Home = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handlesubmit = (e) => {
		e.preventDefault();

		// ServiceId, templateID, publickey
		const serviceId: string = "service_xb34dlf";
		const templateId: string = "template_aq5lamq";
		const publicKey = "MQyDG0_rTqyh7cNIX";

		const templateParams = {
			from_email: email,
			to_name: "Sol-Nexus",
		};

		setIsLoading(true);

		emailjs
			.send(serviceId, templateId, publicKey, templateParams)
			.then((res) => {
				console.log("email sent successfully", res);
				setEmail("");
				setIsLoading(false);
			})
			.catch((err) => {
				console.error("Error sending email", err);
			});
	};

	return (
		<div className="wishlist-wrp">
			<div className="wishlist-cont">
				<div className="bg">
					<div className="wishlist-crd"></div>
				</div>

				<div className="wishlist-items">
					<Image src={logo} />
					<h1>Be Part Of what's next</h1>
					<p>
						Signup for the solneXus waitlist and be notified if you're eligible
						to use
					</p>

					<Flex align={"center"} justify={"center"} w={"30%"} className="wishlist-form-cont">
						<Box pos={"relative"} w={"100%"}>
							<form onSubmit={handlesubmit}>
								<Input
									placeholder="email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									w={"100%"}
									size={"md"}
									radius={"20px"}
									bg={"dark"}
									color="#d4d3d3"
									className="searchinput"
								/>

								<Flex
									align={"center"}
									justify={"center"}
									pos={"absolute"}
									top={"5px"}
									bottom={"5px"}
									right={"0px"}
									bg={"#530e75"}
									style={{ borderRadius: "20px" }}>
									<Button
										size="sm"
										radius={"20px"}
										type="submit"
										className="button">
										{isLoading ? (
											<Loader color="white" size={"sm"} />
										) : (
											"Join Waitlist"
										)}
									</Button>
								</Flex>
							</form>
						</Box>
					</Flex>
				</div>
			</div>
		</div>
	);
};

export default Home;
