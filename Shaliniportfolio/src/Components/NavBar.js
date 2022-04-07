import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navbar = styled.div `
 position: fixed;
 max-width: 23%;
 min-width: 23%;
 min-height: 720px;
 max-height:720px;
 background-color: rgb(194, 172, 172);
 margin-left: 10%;
 top: 0;
 @media (max-width: 768px){
     display: none;
 }
`;

export const Navul = styled.div ` 
    display: grid;
 grid-template-rows: repeat(5, 1fr);
 margin-left: -5%;
 margin-top: 10%;
 
`
export const NavLinkBar = styled.div`

 width: 90%;
 margin-left: 9%;
 min-height: 126px;
 display: grid;
 grid-template-columns: repeat(3,1fr);


`
