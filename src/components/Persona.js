import React from "react";
import { IconButton, Image, Text } from "@chakra-ui/core";
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";

let persona = () => {
  return (
    <div>
      <Box width="15em" maxHeight="25em" bg="#aaa">
        <Flex textAlign="center" flexDirection="column">
          <Image
            src=" https://i.imgur.com/rLFk5nd.jpg"
            maxWidth="100%"
            maxHeight="40%"
          />
          <Text fontSize="18px ">Rogelio Bustamante</Text>
          <Text paddingBottom="1em " color="grey">
            PhD. Computer Science
          </Text>
          <Flex justifyContent="space-around">
            <IconButton aria-label={"phone"} icon="phone" />
            <IconButton aria-label={"mail"} icon="mail" />
            <IconButton aria-label={"researchGate"} icon="search-2" />
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default persona;
