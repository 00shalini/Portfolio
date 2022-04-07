import styled from "styled-components";

export const Blog1 = styled.a`
  width: 200px;
  padding: 12px 48px;
  text-align: center;
  color: white;
  border: solid 2px white;
  z-index: 1;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    color: white;
    border-color: black;
    background-color: black;
  } ;

`;
export const Blog2 = styled.a`
  width: 200px;
  padding: 12px 48px;
  text-align: center;
  color: white;
  border: solid 2px white;
  z-index: 1;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    color: white;
    border-color: black;
    background-color: black;
    margin-left: -2%;
  }
`;

export const overmake = styled.div `  
   @media screen and (max-width: 768px) {
       margin-left: -15%;
   }

`

export const BlogBtn = styled.div `  
  @media screen and (max-width: 480px) {
      padding-left: -5%;
  }
`

export const Cform = styled.div `
 @media screen and (max-width: 480px) {
     display: grid;
     grid-template-columns: repeat(1,1fr);

     min-height: 150%;

 }




`