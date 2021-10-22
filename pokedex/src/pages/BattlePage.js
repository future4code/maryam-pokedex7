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

function BattlePage () {
    const [pokeUser, setPokeUser] = useState([])
    const [pokeComputer, setPokeComputer] = useState([])
    const history = useHistory()
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`

    useEffect(() => {
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
    }, [])


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
        </BattleContainer>
    )
}

export default BattlePage