import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

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
        }, [])

        const numeroAleatorio = Math.floor(Math.random() * (600 - 1)) + 1

        axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}/`)
        .then((res) => {
            setPokeComputer(res.data)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
            history.push('/error')
        }, [])
    })


    return(
        <div>
            {(pokeUser.stats) && (<img 
                src={pokeUser.sprites.versions['generation-v']['black-white'].animated.front_default} 
                alt="Pokémon de frente" 
                />)}

            {(pokeComputer.stats) && (<img 
                src={pokeComputer.sprites.versions['generation-v']['black-white'].animated.front_default} 
                alt="Pokémon de frente" 
                />)}
        </div>
    )
}

export default BattlePage