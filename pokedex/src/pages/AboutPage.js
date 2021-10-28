import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@material-ui/core/Link";
import { CardAbout, ContainerAbout, ImageAbout, AlignContact } from "../styled/Styled";

export const AboutPage = () => {
  return (
    <ContainerAbout>
      <CardAbout>
        <ImageAbout>
          <Avatar
            alt="Maria Helena"
            src="./XY_Hex_Maniac.png"
            sx={{ width: 200, height: 200 }}
          />
        </ImageAbout>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          textAlign="center"
        >
          <b>Maria Helena Souza</b>
        </Typography>
        <p>
          Maria Helena é formada em Relações Internacionais na Universidade
          Federal Rural do Rio de Janeiro, e atualmente faz licenciatura
          em Português & Japonês na Universidade Cruzeiro do Sul. Está em 
          transição de carreira para a área de tecnologia, e também é
          estudante de Fullstack Web Development na Labenu. Possui conhecimentos 
          em HTML, CSS, JavaScript, React, entre outros.
        </p>
        <AlignContact>
        <Link
            href="https://www.linkedin.com/in/lenasouza/"
            target="_blank"
            color="inherit"
            underline="none"
          >
            Linkedin
          </Link>
        </AlignContact>
        <AlignContact>
          <Link
            href="https://github.com/mhsouza88"
            target="_blank"
            color="inherit"
            underline="none"
          >
            GitHub
          </Link>
          </AlignContact>
      </CardAbout>
      <CardAbout>
        <ImageAbout>
          <Avatar
            alt="Silvio Dias"
            src="./silvio.png"
            sx={{ width: 200, height: 200 }}
          />
        </ImageAbout>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          textAlign="center"
        >
          <b>Silvio Dias Júnior</b>
        </Typography>
        <p>
          Silvio é engenheiro de Petróleo formado pela Universidade Federal de
          Alagoas. Estudante de Desenvolvimento Web Full Stack na Labenu,
          buscando aprofundar conhecimentos de ferramentas e linguagens tanto
          para front-end quanto para back-end e desenvolver técnicas
          relacionadas ao desenvolvimento de sistemas. Algumas das ferramentas e
          linguagens foco de estudo até aqui: JavaScript, CSS, HTML e React.
        </p>
        <AlignContact>
          <Link
            href="https://www.linkedin.com/in/silvio-dias-junior/"
            target="_blank"
            color="inherit"
            underline="none"
          >
            Linkedin
          </Link>
          </AlignContact>
          <AlignContact>
          <Link
            href="https://github.com/silviordjr"
            target="_blank"
            color="inherit"
            underline="none"
          >
            GitHub
          </Link>
          </AlignContact>
      </CardAbout>
      <CardAbout>
        <ImageAbout>
          <Avatar
            alt="Magdiel Silva"
            src="./mag.png"
            sx={{ width: 200, height: 200 }}
          />
        </ImageAbout>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          textAlign="center"
        >
          <b>Magdiel Silva</b>
        </Typography>
        <p>
          Magdiel é arquiteto com experiência em pesquisa e planejamento em
          transição de carreira para Desenvolvimento Web Front-end. Busca
          oferecer resultados que sejam objetivos na escrita do código,
          criativos na resolução de problemas e significativos para a
          usabilidade e com foco na otimização, tanto no front-end como no
          back-end.
        </p>
        <AlignContact>
          <Link
            href="https://www.linkedin.com/in/magdiel-silva-3680881a6/"
            target="_blank"
            color="inherit"
            underline="none"
          >
            Linkedin
          </Link>
          </AlignContact>
          <AlignContact>
          <Link
            href="https://github.com/dev-magdielSilva"
            target="_blank"
            color="inherit"
            underline="none"
          >
            GitHub
          </Link>
          </AlignContact>
      </CardAbout>
    </ContainerAbout>
  );
};
