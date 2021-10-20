import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const Styled = createGlobalStyle `
body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
}
`
//----------Styled CardPokedex

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin: 30px;
`

//----------Styled Footer

export const StyledFooter = styled.footer`
    background-color: #ffffff;
    font-family: "Roboto";
    text-decoration: none;
`
export const StyledLogo = styled.img`
    width: 15vw;
`
  
