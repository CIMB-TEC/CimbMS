import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Persona from "../components/Persona";
import { Flex, Text } from "@chakra-ui/core";

function PersonasSite() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Text>Colaboradores</Text>
      <Flex>
        <Persona />
        <Persona />
        <Persona />
      </Flex>
      <Text>Lideres</Text>
      <Flex>
        <Persona />
        <Persona />
        <Persona />
        <Persona />
      </Flex>
      <Text>Maestros</Text>
      <Flex>
        <Persona />
        <Persona />
        <Persona />
        <Persona />
      </Flex>
      <Footer />
    </div>
  );
}

export default PersonasSite;
