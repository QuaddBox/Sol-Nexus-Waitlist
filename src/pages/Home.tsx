/** @format */

import {
	ActionIcon,
	Box,
	Flex,
	Image,
	Loader,
	rem,
	TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import { waitlistSchema } from "../schema";

import { IconArrowRight } from "@tabler/icons-react";

import logo from "../assets/solnexus.gif";
import { waitListEmailInput } from "../inputs";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../api/axios";

import { notifications } from "@mantine/notifications";

// import { useState } from "react";

interface ResponseState {
	message: string;
}

const Home = () => {
	const [response, setResponse] = useState<ResponseState>({ message: "" });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const waitlist = useForm({
		validate: zodResolver(waitlistSchema),
		initialValues: { email: "" },
	});

	// Api fetch
	const sendWaitlist = (data: waitListEmailInput) => {
		console.log(data);

		console.log("sending request");
		setIsLoading(true);

		api
			.post("/waitlist", data)
			.then((res) => {
				console.log(res);
				setResponse(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			});
	};

	// handling submit
	const handleSubmit = (
		data: waitListEmailInput,
		e?: FormEvent<HTMLFormElement>,
	) => {
		if (e) e.preventDefault();
		console.log(data);

		sendWaitlist(data);
	};

	useEffect(() => {
		const { message } = response;
		if (message)
			if (!response.message?.includes("email"))
				notifications.show({
					color: "red",
					title: "Failed",
					message: "Email has already been waitlisted",
				});

		if (response.message?.includes("Email waitlisted")) {
			notifications.show({
				color: "green",
				title: "Success",
				message: "email waitlisted successfully",
			});
		}
	}, [response]);

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
							<form onSubmit={waitlist.onSubmit(handleSubmit)}>
								<TextInput
									radius={"xl"}
									size="md"
									w={"100%"}
									{...waitlist.getInputProps("email")}
									placeholder="input email"
									rightSectionWidth={42}
									rightSection={
										<ActionIcon
											type="submit"
											className="joinwailistbtn"
											size={32}
											radius={"xl"}
											color="#360a5f"
											variant="filled">
											{isLoading ? (
												<Loader size={"sm"} color="white" />
											) : (
												<IconArrowRight
													style={{ width: rem(18), height: rem(18) }}
													stroke={1.5}
												/>
											)}
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
