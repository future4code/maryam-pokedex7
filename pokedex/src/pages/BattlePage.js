import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Background from '../img/background.gif'
import styledComponentsCjs from 'styled-components'

const BattleContainer = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 15rem;
    min-height: 80vh;
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
`

const AlignPokeUser = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10rem;
    margin-left: -14rem;

    img {
        width: 5rem;
    }
`

const AlignPokeComputer = styledComponentsCjs.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -11rem;
    margin-left: 16rem;

    img {
        width: 5rem;
    }
`

const ContainerResultado = styledComponentsCjs.div`
    margin-left:15vw;
    text-transform: capitalize
`
const ContainerPlacar = styledComponentsCjs.div`
    margin-left:15vw;
`

const ContainerSecundario = styledComponentsCjs.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 30vh
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
                    <h3>{pokeComputer.name} venceu!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    <div>
                        <button onClick={onClickNewBattle} >Nova batalha com {pokeUser.name}</button>
                        <button onClick={goToPokedex} >Escolher novo Pokemon na Pokedex</button>
                    </div>
                </div>
            )
        } else if (pontosComputer < pontosUser){
            // setScoreUser(scoreUser + 1)
            return(
                <div>
                    <h3>{pokeUser.name} venceu!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    <div>
                        <button onClick={onClickNewBattle} >Nova batalha com {pokeUser.name}</button>
                        <button onClick={goToPokedex} >Escolher novo Pokemon na Pokedex</button>
                    </div>
                </div>
            )
        } else{
            return(
                <div>
                    <h3>Empate!</h3>
                    <h5>Placar da Batalha:</h5>
                    <h5>{pokeComputer.name} {pontosComputer} X {pontosUser} {pokeUser.name} </h5>
                    <div>
                        <button onClick={onClickNewBattle} >Nova batalha com {pokeUser.name}</button>
                        <button onClick={goToPokedex} >Escolher novo Pokemon na Pokedex</button>
                    </div>
                </div>
            )
        }
    }


    return(
        <BattleContainer>
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
                    <h1>Placar:</h1>
                    <h3>Jogador {scoreUser} X {scoreComputer} Computador</h3>
                </ContainerPlacar>
                <ContainerResultado>
                    {pokeComputer.stats &&(renderizaVencedeor())}
                </ContainerResultado>
                
            </ContainerSecundario>
        </BattleContainer>
    )
}

export default BattlePage