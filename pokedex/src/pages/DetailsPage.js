import React from "react"
import axios from "axios"
import styledComponentsCjs from "styled-components"
import { useState, useEffect } from "react"

const Container = styledComponentsCjs.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
`

const ContainerPictures = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
`

const PictureFront = styledComponentsCjs.div `
    border-radius: 1rem;
    background-color: lightgrey;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1rem;

    img {
        width: 8rem;
    }
`

const PictureBack = styledComponentsCjs.div `
    border-radius: 1rem;
    background-color: lightgrey;
    padding: 1rem;

    img {
        width: 8rem;
    }
`

const PowerTable = styledComponentsCjs.div `
    display: flex; 
    flex-direction: column;
    border-radius: 1rem;
    background-color: lightgrey;
    width: 15rem;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 1rem;
    line-height: 2rem;
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
    border-radius: 1rem;
    background-color: lightgrey;
    padding: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
`

const MainAttacks = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: lightgrey;
    padding: 1rem;
    margin-left: 1rem;
    line-height: 2rem;

    h3 {
        line-height: 1rem;
    }
`

export const DetailsPage = () => {
    const [pokeDetails, setPokeDetails] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon/1/"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setPokeDetails(res.data)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
        })
    }, [url])
    
    return(
        <Container>

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
                {(pokeDetails.stats) && pokeDetails.stats.map((stats) => {
                    return <p><b>{stats.stat.name}: </b>{stats.base_stat}</p>
                })}
            </PowerTable>

            <TypesAndAttacksContainer>
            <Types>
                {(pokeDetails.types) && pokeDetails.types.map((type) => {
                    return <i>{type.type.name}</i>
                })}
            </Types>

            <MainAttacks>
                <h3>Principais ataques</h3>
                {(pokeDetails.moves) && pokeDetails.moves.map((attack, indexOfAttacks) => {
                    return indexOfAttacks < 3 && <p>{attack.move.name}</p>
                })}
            </MainAttacks>
            </TypesAndAttacksContainer>

        </Container>
    )
}

export default DetailsPage