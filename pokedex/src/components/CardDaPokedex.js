import React, {useContext, useEffect, useState} from "react"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import axios from "axios"
import { AlignPhotos, UpperCase, AlignButtons, UpperCaseTypes, PokePhoto } from '../styled/Styled'
import { GlobalContext } from "../context/GlobalContext"
import styledComponentsCjs from "styled-components"

const TipoGrama = styledComponentsCjs.div`
  background-color: green;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoFogo = styledComponentsCjs.div`
  background-color: orange;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoAgua = styledComponentsCjs.div`
  background-color: blue;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoPoison = styledComponentsCjs.div`
  background-color: purple;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`
const TipoLuta = styledComponentsCjs.div`
  background-color: red;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoVoador = styledComponentsCjs.div`
  background-color: #CBC3E3;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoChoque = styledComponentsCjs.div`
  background-color: yellow;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoTerra = styledComponentsCjs.div`
  background-color:  #C89D7C;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoPsychic = styledComponentsCjs.div`
  background-color:  pink;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoPedra = styledComponentsCjs.div`
  background-color:  brown;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoGelo = styledComponentsCjs.div`
  background-color:  #ADD8E6;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoDragao = styledComponentsCjs.div`
  background-color:  #9932cc;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoFantasma = styledComponentsCjs.div`
  background-color:  #7a297a;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoDark = styledComponentsCjs.div`
  background-color:  #783c00;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px;
  color: white;
`

const TipoSteel = styledComponentsCjs.div`
  background-color:  gray;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoFairy = styledComponentsCjs.div`
  background-color:  #fad0dd;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoBug = styledComponentsCjs.div`
  background-color:  #2e8b57;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`

const TipoNormal = styledComponentsCjs.div`
  background-color:  #dbead5;
  margin-right: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 8px
`


const ContainerTipo = styledComponentsCjs.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ImgMediaCard(props) {
  const [imagePoke, setImagePoke] = useState({})
  const [pokemons, setPokemons] = useState([])
  const {pokedex, setPokedex} = useContext(GlobalContext)
  

  useEffect(()=> {
    const url=`https://pokeapi.co/api/v2/pokemon/${props.name}`
    axios.get(url)
    .then((res)=>{
      setImagePoke(res.data.sprites)
      setPokemons(res.data)
      console.log('sprites', res.data.sprites)
    })
  }, [props.name])

  const onClickExcluir = () => {

    const position = pokedex.findIndex((item) => {
      return item === props.name
    })

    const newPokedex = [...pokedex]
    
    newPokedex.splice(position, 1)
    
    if (newPokedex.length === 0){
      window.localStorage.setItem("pokedex", JSON.stringify(newPokedex))
    }
   
    setPokedex(newPokedex)
    

  }

  const retornaNome = pokemons.types && pokemons.types.map((tipo) => {
    if(tipo.type.name.toUpperCase() === 'GRASS'){
      return(
        <TipoGrama>
          {tipo.type.name}
        </TipoGrama>)
    } else if (tipo.type.name.toUpperCase() === 'FIRE'){
      return(
        <TipoFogo>
          {tipo.type.name}
        </TipoFogo>)
    } else if (tipo.type.name.toUpperCase() === 'WATER'){
      return(
        <TipoAgua>
          {tipo.type.name}
        </TipoAgua>)
    }else if (tipo.type.name.toUpperCase() === 'POISON'){
      return(
        <TipoPoison>
          {tipo.type.name}
        </TipoPoison>)
    }else if (tipo.type.name.toUpperCase() === 'FIGHTING'){
      return(
        <TipoLuta>
          {tipo.type.name}
        </TipoLuta>)
    }else if (tipo.type.name.toUpperCase() === 'FLYING'){
      return(
        <TipoVoador>
          {tipo.type.name}
        </TipoVoador>)
    }else if (tipo.type.name.toUpperCase() === 'ELECTRIC'){
      return(
        <TipoChoque>
          {tipo.type.name}
        </TipoChoque>)
    }else if (tipo.type.name.toUpperCase() === 'GROUND'){
      return(
        <TipoTerra>
          {tipo.type.name}
        </TipoTerra>)
    }else if (tipo.type.name.toUpperCase() === 'PSYCHIC'){
      return(
        <TipoPsychic>
          {tipo.type.name}
        </TipoPsychic>)
    }else if (tipo.type.name.toUpperCase() === 'ROCK'){
      return(
        <TipoPedra>
          {tipo.type.name}
        </TipoPedra>)
    }else if (tipo.type.name.toUpperCase() === 'ICE'){
      return(
        <TipoGelo>
          {tipo.type.name}
        </TipoGelo>)
    }else if (tipo.type.name.toUpperCase() === 'DRAGON'){
      return(
        <TipoDragao>
          {tipo.type.name}
        </TipoDragao>)
    }else if (tipo.type.name.toUpperCase() === 'GHOST'){
      return(
        <TipoFantasma>
          {tipo.type.name}
        </TipoFantasma>)
    }else if (tipo.type.name.toUpperCase() === 'DARK'){
      return(
        <TipoDark>
          {tipo.type.name}
        </TipoDark>)
    }else if (tipo.type.name.toUpperCase() === 'STEEL'){
      return(
        <TipoSteel>
          {tipo.type.name}
        </TipoSteel>)
    }else if (tipo.type.name.toUpperCase() === 'FAIRY'){
      return(
        <TipoFairy>
          {tipo.type.name}
        </TipoFairy>)
    }else if (tipo.type.name.toUpperCase() === 'BUG'){
      return(
        <TipoBug>
          {tipo.type.name}
        </TipoBug>)
    }else if (tipo.type.name.toUpperCase() === 'NORMAL'){
      return(
        <TipoNormal>
          {tipo.type.name}
        </TipoNormal>)
    }else{
      return(
        <div>
          {tipo.type.name}
        </div>)
    }
    })

  return (
    <Card onClick={() => props.selecionaPokemon(props.name)} sx={{ minWidth: 275, maxWidth: 365 }}>
      <AlignPhotos>
      <PokePhoto
        component="img"
        alt={props.name}
        height="140"
        image={imagePoke.front_default}
        style={{height: 120, width: 120,}}
      />
      </AlignPhotos>
      <CardContent>
        <UpperCase gutterBottom variant="h6" component="div">
          {props.name}
        </UpperCase>
        {(pokemons.types) &&
        (<UpperCaseTypes variant="body2" color="text.secondary">
          <ContainerTipo>
          {retornaNome} 
          </ContainerTipo>
        </UpperCaseTypes>)}
      </CardContent>
      <AlignButtons>
        <Button variant={"contained"} color={"primary"} size="small" onClick={onClickExcluir} >EXCLUIR</Button>
        <Button size="small"  onClick={() => props.onClickDetalhe(props.name)}>DETALHES</Button>
      </AlignButtons>
    </Card>
  )
}
