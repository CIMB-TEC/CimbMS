import React from "react";
//import tec from "../img/tec.png";
//import cimb from "../img/cimb.png";
import { FormControl, Input, Image, Box } from "@chakra-ui/core";
import Flex from "@chakra-ui/core/dist/Flex";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Flex
      bg="#222"
      h={80}
      padding={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Link to="/">
        {/* <Image src={cimb} alt="Logo" height={60} /> */}
      </Link>

      <Flex direction="row">
        <FormControl>
          <Input placeholder="Search" size="lg" />
        </FormControl>
        <a href="https://tec.mx/es">
          {/* <Image src={tec} alt="Logo" height={50} marginLeft="25px" /> */}
        </a>
      </Flex>
    </Flex>
  );
}

export default navbar;
