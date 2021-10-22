import { useContext, useState } from "react"
import React from "react"
import { GlobalContext } from '../context/GlobalContext'
import { Container } from "../styled/Styled";
import styledComponentsCjs from "styled-components";
import CardPokedex from "../components/CardDaPokedex";
import { useHistory } from "react-router-dom";
import Login from "../components/Login";


const MainPokedex = styledComponentsCjs.div`
    min-height: 80vh;
    font-family: 'Roboto';
`


export const PokedexPage = () => {
   const {pokedex, setPokedex, login, setLogin} = useContext(GlobalContext)
   const history = useHistory()
   const [pokeBattle, setPokeBattle] = useState([])


   const onClickDetalhe = (name) => {
       history.push(`/details/${name}`)
    }

    const selecionaPokemon = (pokemon) => {
        setPokeBattle(pokemon)
    }

    const onClickBattle = (name) => {
        history.push(`/battle/${name}`)
    }

   const listPokemons = pokedex.map((pokemon) => {
    return <CardPokedex  selecionaPokemon={selecionaPokemon}  name={pokemon} onClickDetalhe={onClickDetalhe} />;
  });

    return(
        <MainPokedex>
            {(login === true) ?
            (<Login/>)
            :
            (<div>
                <Container>
                    {(pokedex.length > 0) ? 
                    (listPokemons)
                    :
                    (<div>Você ainda não possui pokemons em sua pokedex.</div>)}
                    <button onClick={() => onClickBattle(pokeBattle)}>Iniciar batalha</button>
                </Container>
            </div>)}
        </MainPokedex>
    )
}