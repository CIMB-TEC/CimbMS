import React from "react";
import {
  Box,
  Divider,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/core";

import DivulgationCardToggle from "./DivulgationCardToggle";

function DivulgationCard(props) {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor={props.bor}
      color="black"
      padding="20px"
    >
      <Box marginBottom="25px">
        {" "}
        <Link color={props.bor} fontSize="25px">
          A study of the effects of advanced driver assistance systems alerts on
          driver performance
        </Link>
      </Box>
      <SimpleGrid columns="2">
        <List spacing={3}>
          <ListItem>
            <ListIcon icon="arrow-forward" color="#black" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon icon="arrow-forward" color="#black" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon icon="arrow-forward" color="black" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
        <Flex justify="flex-end">
          <Divider orientation="vertical"></Divider>
          <Stack>
            <Box>
              <Text>Proyecto: ADMAS</Text>
            </Box>
            <Box>
              <Text>Autor: Dr. Javier Izquierdo Reyes</Text>
            </Box>
            <Box>
              <Text>Año de publicación: 2017</Text>
            </Box>
            <Box>
              <Text></Text>
            </Box>
          </Stack>
        </Flex>
      </SimpleGrid>
      <DivulgationCardToggle col={props.col} />
    </Box>
  );
}

export default DivulgationCard;
