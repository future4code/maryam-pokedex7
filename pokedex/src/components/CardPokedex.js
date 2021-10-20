import React, {useEffect, useState} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { styled } from "@mui/system";

const UpperCase = styled(Typography)(({ theme }) => ({
    textTransform: 'capitalize',
    textAlign: 'center'
}))

const AlignButtons = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center'
}))

const UpperCaseTypes = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  textAlign: 'center'
}))


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
        <UpperCase gutterBottom variant="h6" component="div">
          {props.name}
        </UpperCase>
        {(pokemons.types) &&
        (<UpperCaseTypes variant="body2" color="text.secondary">
          {pokemons.types.map((tipo) => {
            return(
            <div>
              {tipo.type.name}
            </div>)
            })} 
        </UpperCaseTypes>)}
      </CardContent>
      <AlignButtons>
        <Button variant={"contained"} color={"primary"} size="small">ADICIONAR</Button>
        <Button size="small"  onClick={() => props.onClickDetalhe(props.name)}>DETALHES</Button>
      </AlignButtons>
    </Card>
  );
}
