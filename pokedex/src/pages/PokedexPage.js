import { useContext, useState } from "react"
import React from "react"
import { GlobalContext } from '../context/GlobalContext'
import { Container } from "../styled/Styled";
import styledComponentsCjs from "styled-components";
import CardPokedex from "../components/CardDaPokedex";
import { useHistory } from "react-router-dom";
import Login from "../components/Login";
import { Button } from "@mui/material";


const MainPokedex = styledComponentsCjs.div`
    min-height: 80vh;
    font-family: 'Roboto';
`

const AlignBattleBegin = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
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
            <AlignBattleBegin>
                Selecione um Pokémon para iniciar a batalha.<br/>
                O escolhido lutará contra um Pokémon aleatório!
                <Button 
                variant={"contained"} 
                color={"primary"} 
                size="large"
                sx={{ marginTop: '1rem'}}
                onClick={() => onClickBattle(pokeBattle)}>Iniciar batalha
                </Button>
            </AlignBattleBegin>
            {(login === true) ?
            (<Login/>)
            :
            (<div>
                <Container>
                    {(pokedex.length > 0) ? 
                    (listPokemons)
                    :
                    (<div>Você ainda não possui pokemons em sua pokedex.</div>)}
                </Container>
            </div>)}
        </MainPokedex>
    )
}