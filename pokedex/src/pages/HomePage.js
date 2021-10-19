import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Button from '@mui/material/Button';
import { Container } from "../styled/Styled";
import CardPokedex from "../components/CardPokedex";

export const HomePage = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`;
    axios
      .get(url)
      .then((res) => {
        setPokemonsList(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log("erro na requisição", error);
      });
  }, []);

  const listPokemons = pokemonsList.map((pokemon) => {
    return <CardPokedex name={pokemon.name} />;
  });

  return (
    <div>
      <Header />
      <Container>{listPokemons}</Container>
      <Button variant={"contained"} >BUSCAR MAIS POKEMONS</Button>
    </div>
  );
};
