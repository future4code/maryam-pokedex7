import { createGlobalStyle } from "styled-components"
import styledComponentsCjs from "styled-components"
import { styled } from "@mui/system"
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'

export const Styled = createGlobalStyle `
body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
}
`
//----------Styled CardPokedex

export const Container = styledComponentsCjs.div`
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
  
//---------- CardPokeDex

export const AlignPhotos = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UpperCase = styled(Typography)(({ theme }) => ({
    textTransform: 'capitalize',
    textAlign: 'center'
}))


export const AlignButtons = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center'
}))


export const UpperCaseTypes = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  textAlign: 'center'
}))


export const PokePhoto = styled(CardMedia)(({ theme }) => ({
  padding: '0.5rem'
}))
