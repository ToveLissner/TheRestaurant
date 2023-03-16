import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
//import { Booking } from "./components/Booking";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled/Theme";
import { Admin } from "./components/Admin";
import Booking from "./Booking";
import { StyledHeroImage } from "./components/styled/Hero/Image/Image.styled";

function App() {
	// type StateProps = {
	// 	open: boolean;
	// 	setOpen: boolean;
	// };

	return (
		// <div>
		//   <Header/>
		//   <main>
		//     <Outlet></Outlet>
		//   </main>
		//   <Admin/>
		// </div>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledHeroImage>
				<Header />
			</StyledHeroImage>
		</ThemeProvider>
	);
}

export default App;
