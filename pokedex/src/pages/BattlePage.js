import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Background from '../img/background.gif'
import styledComponentsCjs from 'styled-components'
import { Button } from '@mui/material'
import Music from '../sound/music.mp3'

const BattleContainer = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 15rem;
    min-height: 80vh;
    font-family: 'Roboto';

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        h2 {
            font-size: 1.3em;
        }
    }
`

const Battlefield = styledComponentsCjs.div `
    display: flex;
    flex-content: row;
    justify-content: center;
    align-items: center;
    
    img {
        border-radius: 0.3rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        img {
            width: 23rem;
        }
    }
`

const AlignPokeUser = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10rem;
    margin-left: -14rem;

    img {
        width: 6rem;
    }

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        margin-top: -6rem;
        margin-left: -8rem;

        img {
            width: 4rem;
        }
    }
`

const AlignPokeComputer = styledComponentsCjs.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -12rem;
    margin-left: 16rem;

    img {
        width: 4rem;
    }

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        margin-top: -7rem;
        margin-left: 8rem;
        img {
            width: 3rem;
        }
    }
`

const ContainerResultado = styledComponentsCjs.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    text-transform: capitalize;
    font-family: 'Roboto';
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        margin-bottom: 1rem;
    }
    
`
const ContainerPlacar = styledComponentsCjs.div`
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        margin-bottom: 1rem;
    }
`

const ContainerSecundario = styledComponentsCjs.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 14rem;

    @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const AlignResultButtons = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

const BattleAudio = styledComponentsCjs.audio `
    height: 2rem;
    width: 14rem;
`

function BattlePage () {
    const [pokeUser, setPokeUser] = useState([])
    const [pokeComputer, setPokeComputer] = useState([])
    const [flagNewBattle, setFlagNewBattle] = useState(false)
    const [scoreUser, setScoreUser] = useState(0)
    const [scoreComputer, setScoreComputer] = useState(0)
    const history = useHistory()
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`

    useEffect(() => {
        console.log('oi')
        axios.get(url)
        .then((res) => {
            setPokeUser(res.data)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
            history.push('/error')
        })

        const numeroAleatorio = Math.floor(Math.random() * (600 - 1)) + 1

        axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}/`)
        .then((res) => {
            setPokeComputer(res.data)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
            history.push('/error')
        })
    }, [flagNewBattle])

    const onClickNewBattle = () => {
        let pontosUser = 0
        let pontosComputer = 0

        pokeUser.stats && pokeUser.stats.map((stat) => {
            pontosUser = pontosUser + stat.base_stat
        })

        pokeComputer.stats && pokeComputer.stats.map((stat) => {
            pontosComputer = pontosComputer + stat.base_stat
        })

        if (pontosUser > pontosComputer){
            setScoreUser(scoreUser + 1)
        } else if (pontosComputer > pontosUser){
            setScoreComputer(scoreComputer + 1)
        }

        setFlagNewBattle(!flagNewBattle)
    }
    
    const goToPokedex = () => {
        let pontosUser = 0
        let pontosComputer = 0

        pokeUser.stats && pokeUser.stats.map((stat) => {
            pontosUser = pontosUser + stat.base_stat
        })

        pokeComputer.stats && pokeComputer.stats.map((stat) => {
            pontosComputer = pontosComputer + stat.base_stat
        })

        if (pontosUser > pontosComputer){
            setScoreUser(scoreUser + 1)
        } else if (pontosComputer > pontosUser){
            setScoreComputer(scoreComputer + 1)
        }

        history.push('/pokedex')
    }

    const renderizaVencedeor = () => {
        let pontosUser = 0
        let pontosComputer = 0

        pokeUser.stats && pokeUser.stats.map((stat) => {
            pontosUser = pontosUser + stat.base_stat
        })

        pokeComputer.stats && pokeComputer.stats.map((stat) => {
            pontosComputer = pontosComputer + stat.base_stat
        })

        if (pontosComputer > pontosUser){
            // setScoreComputer(scoreComputer + 1)
            return(
                <div>
                    <div>
                    <h3>{pokeComputer.name} venceu!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    </div>
                </div>
            )
        } else if (pontosComputer < pontosUser){
            // setScoreUser(scoreUser + 1)
            return(
                <div>
                    <div>
                    <h3>{pokeUser.name} venceu!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    </div>
                </div>
            )
        } else{
            return(
                <div>
                    <div>
                    <h3>Empate!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    </div>
                </div>
            )
        }
    }


    return(
        <BattleContainer>
            <BattleAudio src={Music} controls />
            <h2>Um Pokémon selvagem apareceu!</h2>
            <Battlefield>
                <img src={Background} alt="Campo de batalha" />
                </Battlefield>
            
            <AlignPokeUser>
            {(pokeUser.stats) && (<img 
                src={pokeUser.sprites.versions['generation-v']['black-white'].animated.back_default} 
                alt="Pokémon de costas"  
                />)}
            </AlignPokeUser>

            <AlignPokeComputer>
            {(pokeComputer.stats) && (<img 
                src={pokeComputer.sprites.versions['generation-v']['black-white'].animated.front_default} 
                alt="Pokémon de frente" 
                />)}
            </AlignPokeComputer>
            <ContainerSecundario>

                <ContainerPlacar>
                    <h2>Placar:</h2>
                    <h3>Jogador {scoreUser} X {scoreComputer} Computador</h3>
                </ContainerPlacar>
                <ContainerResultado>
                    {pokeComputer.stats &&(renderizaVencedeor())}
                </ContainerResultado>

            </ContainerSecundario>
            <AlignResultButtons>
                        <Button style={{marginBottom: '1rem'}} variant={"contained"} color={"primary"} size="small" onClick={onClickNewBattle} >Nova batalha com {pokeUser.name}</Button>
                        <Button variant={"contained"} color={"primary"} size="small" onClick={goToPokedex} >Escolher novo Pokemon na Pokedex</Button>
                    </AlignResultButtons>
        </BattleContainer>
    )
}

export default BattlePage