import React from 'react'
import styledComponentsCjs from 'styled-components'
import error from '../img/error.gif'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'

const MainError = styledComponentsCjs.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Gif = styledComponentsCjs.img`
    height:50vh;
    width: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

function ErrorPage () {
    const history = useHistory()

    const onCLickRecarregar = () => {
        history.goBack()
    }
    
    return(
        <MainError>
            <h1>Ops. Algo deu errado...</h1>
            <h3>Clique no botão abaixo para recarregar a página.</h3>
            <Button variant={"contained"} color="error" onClick={onCLickRecarregar}>RECARREGAR</Button>
            <Gif src={error} alt='Erro...' />
        </MainError>
    )
}

export default ErrorPage