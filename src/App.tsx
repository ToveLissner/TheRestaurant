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
import Booking from "./pages/Booking";
import { StyledHeroImage } from "./components/styled/Hero/Image/Image.styled";
import Title from "./components/styled/Hero/Title/Title";
import Main from "./components/styled/MainContent/Main";
import Footer from "./components/styled/Footer/Footer";

function App() {
  // type StateProps = {
  // 	open: boolean;
  // 	setOpen: boolean;
  // };

  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>


      /* <GlobalStyles />
      <StyledHeroImage>
        
        <Title />
      </StyledHeroImage> */

    // <ThemeProvider theme={theme}>

     
    //   <Main />
    //   
    // </ThemeProvider>
  );
}

export default App;
