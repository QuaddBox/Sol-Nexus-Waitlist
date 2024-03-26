/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.scss";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider>
			<Notifications position="top-right" />
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
