import styled from "styled-components";

// $tablet_breakpoint: 648px;
// $desktop_breakpoint: 1200px;

// let tablet_breakpoint = "648px";
// let desktop_breakpoint = "1200px";

export const LiWrapper = styled.ul `
    display: flex;
    justify-content: end;
    width: 100%;
    background-color: yellow;
`;

// flex-direction: row;
// margin: 10px;
// padding: 0;
// gap: 10px;

export const Li = styled.li `
list-style: none;
`;

            // a{
            //     text-decoration: none;
            //     color: black;


// @mixin tablet {
//     @media screen and (min-width:$tablet_breakpoint) {
//         @content;
//  }     
// }

// @mixin desktop {
//     @media screen and (min-width:$desktop_breakpoint) {
//         @content;
//     }     
// }