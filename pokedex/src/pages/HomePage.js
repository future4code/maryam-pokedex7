import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Button from '@mui/material/Button';
import { Container } from "../styled/Styled";
import CardPokedex from "../components/CardPokedex";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [navPokemons, setNavPokemons] = useState([])
  const history = useHistory()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=0`;
    axios
      .get(url)
      .then((res) => {
        setPokemonsList(res.data.results);
        setNavPokemons(res.data)
        console.log(res.data)
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log("erro na requisição", error);
      });
  }, []);

  const nextPokemonPage = (url) => {
    axios.get(url)
    .then((res) => {
      setPokemonsList(res.data.results);
      setNavPokemons(res.data)
      console.log(res.data.results)
    })
    .catch((err) => {
      console.log("erro na requisição", err);
    })
  }

  const onClickDetalhe = (name) => {
    history.push(`/details/${name}`)
  }

  const listPokemons = pokemonsList.map((pokemon) => {
    return <CardPokedex name={pokemon.name} onClickDetalhe={onClickDetalhe} />;
  });

  return (
    <div>
      <Header />
      <Container>{listPokemons}</Container>
      {(navPokemons.previous !== null) &&
      (<Button variant={"contained"} onClick={() => nextPokemonPage(navPokemons.previous)} >Previous Page</Button>)}
      {(navPokemons.next !== null) &&
      (<Button variant={"contained"} onClick={() => nextPokemonPage(navPokemons.next)} >Next Page</Button>)}
  
    </div>
  );
};
