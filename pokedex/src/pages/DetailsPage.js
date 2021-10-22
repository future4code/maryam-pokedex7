import React, { useContext } from "react"
import axios from "axios"
import styledComponentsCjs from "styled-components"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import Login from "../components/Login"
import { useHistory } from "react-router-dom"

const Container = styledComponentsCjs.div `
    display: flex;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    min-height: 80vh;

    h3 {
        line-height: 1rem;
    }

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
`

const ContainerPictures = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
`

const PictureFront = styledComponentsCjs.div `
    border-radius: 0.3rem;
    background-color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
        width: 8rem;
    }
`

const PictureBack = styledComponentsCjs.div `
    border-radius: 0.3rem;
    background-color: white;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
        width: 8rem;
    }
`

const PowerTable = styledComponentsCjs.div `
    display: flex; 
    flex-direction: column;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
    width: 15rem;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    line-height: 2rem;
    font-family: 'Roboto';
    text-transform: capitalize;

    h3 {
        text-align: center;
    }
`

const TypesAndAttacksContainer = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
`

const Types = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
    padding: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-family: 'Roboto';
    line-height: 2rem;
    text-transform: capitalize;

`

const MainAttacks = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
    padding: 1rem;
    margin-left: 1rem;
    line-height: 0.5rem;
    font-family: 'Roboto';
    text-transform: capitalize;
    text-align: center;
    
    h3 {
        text-align: center;
    }
`

export const DetailsPage = () => {
    const [pokeDetails, setPokeDetails] = useState([])
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    const {login, setLogin} = useContext(GlobalContext)
    const history = useHistory()

    useEffect(() => {
        setLogin(true)
        axios
        .get(url)
        .then((res) => {
            setPokeDetails(res.data)
            setLogin(false)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
            setLogin(false)
            history.push('/error')
        })
    }, [url])
    
    return(
        <Container>
            {(login === true) ?
            (<Login />)
            :
            (<Container>
            <ContainerPictures>
            <PictureFront>
                {(pokeDetails.stats) && (<img 
                src={pokeDetails.sprites.versions['generation-v']['black-white'].animated.front_default} 
                alt="Pokémon de frente" 
                />)}
            </PictureFront>
            
            <PictureBack>
                {(pokeDetails.stats) && (<img 
                src={pokeDetails.sprites.versions['generation-v']['black-white'].animated.back_default} 
                alt="Pokémon de costas" 
                />)}
            </PictureBack>
            </ContainerPictures>

            <PowerTable>
            <h3>Stats</h3>
                {(pokeDetails.stats) && pokeDetails.stats.map((stats) => {
                    return <p><b>{stats.stat.name}: </b>{stats.base_stat}</p>
                })}
            </PowerTable>

            <TypesAndAttacksContainer>
            <Types>
            <h3>Tipos</h3>
                {(pokeDetails.types) && pokeDetails.types.map((type) => {
                    return <i>{type.type.name}</i>
                })}
            </Types>

            <MainAttacks>
                <h3>Ataques</h3>
                {(pokeDetails.moves) && pokeDetails.moves.map((attack, indexOfAttacks) => {
                    return indexOfAttacks < 3 && <p>{attack.move.name}</p>
                })}
            </MainAttacks>
            </TypesAndAttacksContainer>
            </Container>)}

        </Container>
    )
}

export default DetailsPage