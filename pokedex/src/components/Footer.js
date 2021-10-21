import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import {StyledFooter} from "../styled/Styled"

export const Footer = () => {
    return (
        <StyledFooter>
        <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 10  }} bgcolor="text.Secundary" color="brack">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}> Navegue por nosso aplicativo  </Box>
                        <br/>
                        <Box>
                            <Link href="/" color="inherit" underline="none">
                                Página Principal
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/pokedex" color="inherit" underline="none">
                                Pokedex
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} > Quem somos </Box>
                        <br/>
                       
                        <Box>
                            <Link href="/about" color="inherit" underline="none">
                                Sobre
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Siga as nosas redes sociais:</Box>
                        <br/>
                        <Box>
                            <Link href="https://www.facebook.com/"  target="_blank" color="inherit" underline="none">
                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.instagram.com/"  target="_blank" color="inherit" underline="none">
                                Instagram
                            </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.tiktok.com/pt-BR/"  target="_blank" color="inherit" underline="none">
                                TikTok
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 10 }} pb={{xs: 5, sm: 0}}> 
                Pokedex Group7 &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
        </StyledFooter>
    )
}