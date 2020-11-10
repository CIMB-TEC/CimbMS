import { Text, Box, Stack, Divider, Image } from "@chakra-ui/core";
import React from "react";
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import NewsCard from "./MainComponents/Card";
import Footer from "../components/Footer";
import QuienesSomos from "../img/QuienesSomos.jpg";
import AcercaDe from "../img/AcercaDe.jpg";
import News from "../img/news.PNG";
import News2 from "../img/news2.PNG";

function Main() {
  return (
    <div>
      <Navbar />
      <Menu />
      <SimpleGrid bg="white" h="500px" textAlign="left" columns={2}>
        <Box marginTop="40px" marginLeft="25px">
          <Text fontSize="45px">Acerca del CIMB</Text>
          <Text fontSize="25px">
            El Laboratorio de CIMB (Computing Intelligence, Mechatronics and
            Biodesign) es una iniciativa generada por un grupo de profesores y
            alumnos del Tecnológico de Monterrey en Campus Ciudad de México en
            el año 2009.
          </Text>
        </Box>

        <Box>
          <Image
            src={AcercaDe}
            p="25px"
            maxW="700px"
            maxH="500px"
            margin="auto"
          ></Image>
        </Box>
      </SimpleGrid>

      <SimpleGrid bg="white" h="500px" textAlign="left" columns={2}>
        <Box p="25px">
          <Image
            src={QuienesSomos}
            margin="auto"
            maxW="700px"
            maxH="500px"
          ></Image>
        </Box>

        <Box>
          <Text fontSize="45px">¿Quiénes somos?</Text>
          <Text fontSize="25px">
            Nuestro grupo busca generar proyectos para la mejora de la calidad
            de vida de la sociedad mexicana y una mejora de la Experiencia del
            Usuario (UX) ante el uso de nuevas tecnologías. Él laboratorio
            trabaja a través de la generación de proyectos de Posgrados y
            Pregrado sobre las distintas líneas de investigación de enfoque.
          </Text>
        </Box>
      </SimpleGrid>

      <Text textAlign="center" fontSize="45px">
        Ultimas noticias
      </Text>

      <SimpleGrid margin="25px" columns={3} spacing={2}>
        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#d69e2e"
          col="yellow"
        />
        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#d53f8c"
          col="pink"
        />

        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#3685cf"
          col="blue"
        />

        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#d69e2e"
          col="yellow"
        />
        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#d53f8c"
          col="pink"
        />

        <NewsCard
          href="https://www.google.com"
          thumbnail="https://i.imgur.com/rLFk5nd.jpg"
          title="New project update"
          date="06/07/2020"
          bor="#3685cf"
          col="blue"
        />
      </SimpleGrid>

      <Footer />
    </div>
  );
}

export default Main;
