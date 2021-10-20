import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { StyledLogo } from '../styled/Styled';
import { useHistory } from 'react-router-dom';


export default function ButtonAppBar() {
  const history = useHistory()

  const onClickPokedex = () =>{
    history.push("/pokedex")
  }

  const onClickHome = () => {
    history.push('/')
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
          <StyledLogo src={"./logo.png"} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="center" onClick={onClickHome} >
            Lista de Pokémons
          </Typography>
          <Button variant={"contained"} color="error" onClick={onClickPokedex} >Minha Pokedex</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}