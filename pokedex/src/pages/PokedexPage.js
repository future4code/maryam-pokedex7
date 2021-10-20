import {useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/Header"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const PokedexPage = () => {
    const [pokemons, setPokemons] = useState([])
 
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then((res) => {
            setPokemons(res.data)
            
        })

    }, [])  

    console.log(pokemons)

    return(
        <div>
            <Header />
            <Card sx={{ maxWidth: 345 }}>
                {(pokemons.sprites) && 
                (<CardMedia
                    component="img"
                    alt="Imagem Pokemon"
                    height="300"
                    image={pokemons.sprites.versions['generation-v']['black-white'].animated.front_default}
                />)}
                {(pokemons.sprites) &&
                (<CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemons.forms[0].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pokemons.types.map((tipo) => {
                            return(tipo.type.name)
                        })} 
                    </Typography>
                </CardContent>)}
                <CardActions>
                    <Button size="small">Excluir da Pokedex</Button>
                    <Button size="small">Ver Detalhes</Button>
                </CardActions>
            </Card>
        </div>
    )
}