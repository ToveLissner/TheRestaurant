import React from "react";

import "./App.css";
import { handleClick } from "./services/restaurantService";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Booking } from "./components/Booking";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
		</>
	);
}

export default App;
