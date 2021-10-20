import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import Button from '@mui/material/Button';
import { Container } from "../styled/Styled";
import CardPokedex from "../components/CardPokedex";
import { useHistory } from "react-router-dom";
import styledComponentsCjs from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { textFieldClasses } from "@mui/material";
import Login from "../components/Login";

const MainHome = styledComponentsCjs.div`
  min-height: 80vh;
`

export const HomePage = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [navPokemons, setNavPokemons] = useState([])
  const history = useHistory()
  const {login, setLogin} = useContext(GlobalContext)

  useEffect(() => {
    setLogin(true)
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=0`;
    axios
      .get(url)
      .then((res) => {
        setPokemonsList(res.data.results);
        setNavPokemons(res.data)
        console.log(res.data)
        console.log(res.data.results);
        setLogin(false)
      })
      .catch((error) => {
        console.log("erro na requisição", error);
        setLogin(false)
      });
  }, []);

  const nextPokemonPage = (url) => {
    setLogin(true)
    axios.get(url)
    .then((res) => {
      setPokemonsList(res.data.results);
      setNavPokemons(res.data)
      console.log(res.data.results)
      setLogin(false)
    })
    .catch((err) => {
      console.log("erro na requisição", err);
      setLogin(false)
    })
  }

  const onClickDetalhe = (name) => {
    history.push(`/details/${name}`)
  }

 
  const listPokemons = pokemonsList.map((pokemon) => {
    return <CardPokedex name={pokemon.name} onClickDetalhe={onClickDetalhe} />;
  });
  

  return (
    <MainHome>
      {(login === true) ?
      (<Login />)
      :
      (
      <div>
        <Container>{listPokemons}</Container>
        {(navPokemons.previous !== null) &&
        (<Button variant={"contained"} onClick={() => nextPokemonPage(navPokemons.previous)} >Previous Page</Button>)}
        {(navPokemons.next !== null) &&
        (<Button variant={"contained"} onClick={() => nextPokemonPage(navPokemons.next)} >Next Page</Button>)}
      </div>)}

    </MainHome>
  );
};
