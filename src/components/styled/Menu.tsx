import styled from "styled-components";

export const MenuIconWrapper = styled.div`
display: flex;
flex-direction: column;
/* gap: 4px; */
    top: px;
    opacity: ;
    -webkit-transition: opacity .25s ease, top .35s ease;
    -moz-transition: opacity .25s ease, top .35s ease;
    transition: opacity .25s ease, top .35s ease;

    position: fixed;
    z-index: 999999;
    top: 10px;
    left: 15px;
    right: auto;
    width: 40px;
    height: 45px;
    cursor: pointer;
    /* -webkit-transition: opacity .2s ease .3s, top 0s ease .3s;
    -moz-transition: opacity .2s ease .3s, top 0s ease .3s; */
    transition: opacity .2s ease .3s, top 0s ease .3s;
    /* -webkit-tap-highlight-color: rgba(0,0,0,0); */
    justify-content: space-evenly;
`;

export const MenuIcon = styled.div `
    padding: 2px 2.5px;
    width: 40px;
    background-color: white;
    /* -webkit-transition: all .3s ease; */
    /* -moz-transition: all .3s ease; */
    transition: all .3s ease;
`;
    



