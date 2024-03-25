/** @format */

import { ActionIcon, Box, Flex, Image, rem, TextInput } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import logo from "../assets/solnexus.gif";

const Home = () => {
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

					<Flex
						align={"center"}
						justify={"center"}
						w={"30%"}
						className="wishlist-form-cont">
						<Box pos={"relative"} w={"100%"}>
							<form>
								<TextInput
									radius={"xl"}
									size="md"
									w={"100%"}
									placeholder="input email"
									rightSectionWidth={42}
									rightSection={
										<ActionIcon
											className="joinwailistbtn"
											size={32}
											radius={"xl"}
											color="#360a5f"
											variant="filled">
											<IconArrowRight
												style={{ width: rem(18), height: rem(18) }}
												stroke={1.5}
											/>
										</ActionIcon>
									}
								/>
							</form>
						</Box>
					</Flex>
				</div>
			</div>
		</div>
	);
};

export default Home;
