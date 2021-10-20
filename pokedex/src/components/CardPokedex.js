import React, {useEffect, useState} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";

export default function ImgMediaCard(props) {
  const [imagePoke, setImagePoke] = useState({})
  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    const url=`https://pokeapi.co/api/v2/pokemon/${props.name}`
    axios.get(url)
    .then((res)=>{
      setImagePoke(res.data.sprites)
      setPokemons(res.data)
      console.log('sprites', res.data.sprites)
    })
  }, [props.name])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image= {imagePoke.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        {(pokemons.types) &&
        (<Typography variant="body2" color="text.secondary">
          {pokemons.types.map((tipo) => {
            return(
            <div>
              {tipo.type.name}
            </div>)
            })} 
        </Typography>)}
      </CardContent>
      <CardActions>
        <Button variant={"contained"} color={"primary"} size="small">ADICIONAR</Button>
        <Button size="small"  onClick={() => props.onClickDetalhe(props.name)}>DETALHES</Button>
      </CardActions>
    </Card>
  );
}
