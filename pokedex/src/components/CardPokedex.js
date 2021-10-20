import React, {useEffect, useState} from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import axios from "axios"
import { AlignPhotos, UpperCase, AlignButtons, UpperCaseTypes, PokePhoto } from '../styled/Styled'

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
      <AlignPhotos>
      <PokePhoto
        component="img"
        alt={props.name}
        height="140"
        image={imagePoke.front_default}
        style={{height: 120, width: 120}}
      />
      </AlignPhotos>
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
  )
}
