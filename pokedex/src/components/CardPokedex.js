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

  useState(()=> {
    const url=`https://pokeapi.co/api/v2/pokemon/${props.name}`
    axios.get(url)
    .then((res)=>{
      setImagePoke(res.data.sprites)
    })
  })

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
        <Typography variant="body2" color="text.secondary">
          Adicionar alguma informação
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant={"contained"} color={"primary"} size="small">ADICIONAR</Button>
        <Button size="small">DETALHES</Button>
      </CardActions>
    </Card>
  );
}
