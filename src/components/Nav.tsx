import { Link } from "react-router-dom";
import { Button } from "./styled/Buttons";
import { Li, LiWrapper } from "./styled/Li";

import { MenuIcon, MenuIconWrapper } from "./styled/Menu";
import { NavStyled } from "./styled/NavStyled";
import { Wrapper } from "./styled/Wrappers";

export const  Nav = () => {

    function clickOnMenu(){
        console.log("hej");
    }

    return (
        <NavStyled>
            <MenuIconWrapper onClick={clickOnMenu}>
                <MenuIcon></MenuIcon>
                <MenuIcon></MenuIcon>
                <MenuIcon></MenuIcon>
            </MenuIconWrapper>
            <LiWrapper>
                {/* <Li>
                    <Link to="/">Hem</Link>
                </Li> */}
                {/* <Li>
                    <Link to="/contact">Kontakt</Link>
                </Li>
                <Li>
                    <Link to="/booking">Boka bord</Link>
                </Li> */}
            </LiWrapper>
            <Wrapper><Button bgcolor="transparent">Boka bord</Button></Wrapper>
        </NavStyled>
     )

};