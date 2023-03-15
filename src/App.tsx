import React from "react";

import "./App.css";
import { handleClick } from "./services/restaurantService";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Booking } from "./components/Booking";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled/Theme";
import Burger from "./components/styled/Burger/Burger";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles>
					<Burger />
				</GlobalStyles>
			</>
		</ThemeProvider>
	);
}

export default App;
