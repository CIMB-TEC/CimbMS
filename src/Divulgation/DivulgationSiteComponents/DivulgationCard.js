import React from 'react';
import {Box, Divider, Flex, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text,} from "@chakra-ui/core";

import DivulgationCardToggle from './DivulgationCardToggle'

function DivulgationCard() {


    return (
        <Box bg="#1a1a1a" border="1px" borderColor="#75de45" color="white" padding="20px">
            <Box marginBottom="25px"> <Link color="#75de45" fontSize="25px">A study of the effects of advanced driver
                assistance systems alerts on driver performance</Link>
            </Box>
            <SimpleGrid columns="2">

                <List spacing={3}>
                    <ListItem>
                        <ListIcon icon="arrow-forward" color="#75de45"/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="arrow-forward" color="#75de45"/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem><ListItem>
                    <ListIcon icon="arrow-forward" color="#75de45"/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>

                </List>
                <Flex justify="flex-end">
                    <Divider orientation="vertical"></Divider>
                    <Stack>
                        <Box><Text>Proyecto: ADMAS</Text></Box>
                        <Box><Text>Autor: Dr. Javier Izquierdo Reyes</Text></Box>
                        <Box><Text>Año de publicación: 2017</Text></Box>
                        <Box><Text></Text></Box>
                    </Stack>
                </Flex>

            </SimpleGrid>
            <DivulgationCardToggle/>

        </Box>
    );
}


export default DivulgationCard;
