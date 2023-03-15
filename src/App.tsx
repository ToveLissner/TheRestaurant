import React, {useState} from "react";

import "./App.css";
import { handleClick } from "./services/restaurantService";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Booking } from "./components/Booking";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled/Theme";
import Burger from "./components/styled/Burger/Burger";
import Menu from "./components/styled/Menu/Menu";

function App() {

	type StateProps = {
		open: boolean;
		setOpen: boolean;
	}

	const [open, setOpen] = useState(false);
	return (
		
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyles/>

					<div>
						<Burger open={open} setOpen={setOpen}/>
						<Menu open={open} setOpen={setOpen}/>
					</div>
				</>
				
			</ThemeProvider>
	);
}

export default App;
