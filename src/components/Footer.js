import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import Stack from "@chakra-ui/core/dist/Stack";
//import tec from "../img/tec.png";
//import cimb from "../img/cimb.png";
import { Text, Image, SimpleGrid } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";

let footer = () => {
  return (
    <SimpleGrid columns={3} bg="#222" h="300px">
      <Box margin="auto">
        {" "}
        <Link to="/">
          {" "}
          {/* <Image src={cimb} alt="Logo" width={200} /> */}
        </Link>
      </Box>

      <SimpleGrid columns={2} margin="auto" spacing={8}>
        <Box>
          <Box as={AiOutlineCar} margin="auto" size="50px " color="white"></Box>
          <Text color="white" textAlign="center">
            ADMAS
          </Text>
        </Box>

        <Box>
          <Box as={BsHouseDoor} margin="auto" size="50px " color="white"></Box>
          <Text color="white" textAlign="center">
            Domótica Emocional{" "}
          </Text>
        </Box>
        <Box>
          {" "}
          <Box as={GiFruitBowl} margin="auto" size="50px " color="white"></Box>
          <Text color="white" textAlign="center">
            Agricultura Acústica
          </Text>
        </Box>
        <Box>
          {" "}
          <Box as={GiMuscleUp} margin="auto" size="50px " color="white"></Box>
          <Text color="white" textAlign="center">
            ExoDUX
          </Text>
        </Box>
      </SimpleGrid>

      <Stack margin="auto">
        <Box>
          <a href="https://tec.mx/es">
            {/* <Image src={tec} alt="Logo" height={60} /> */}
          </a>
        </Box>

        <Box margin="auto">
          <Text color="white">
            CEDETEC 3er piso <br />
            Calle del Puente #222 <br />
            Col. Ejidos de Huipulco, <br />
            Tlalpan C.P. 14380, México D.F.
          </Text>
        </Box>
      </Stack>
    </SimpleGrid>
  );
};

export default footer;
