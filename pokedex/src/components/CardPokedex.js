import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pikachu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sou divertido e as vezes dou choque!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
