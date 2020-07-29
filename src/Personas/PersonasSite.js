import React from 'react'
import {
    Button,
    Collapse,
    Box,
    Text,
    Stack,
    Image,
    Flex,

} from "@chakra-ui/core";

import PersonasCard from './PersonasCard'
import Navbar from "../components/Navbar";


function PersonasSite() {


    return (
        <Box w='100%'>

            <Box >
                <Box marginTop='25px' marginLeft='25px' ><Text textAlign='center' fontSize='35px'>Directores</Text></Box>

                <Flex justify='center' wrap='wrap' direction='row' >
                    <PersonasCard bor='#d69e2e' col='yellow' />
                    <PersonasCard bor='#d69e2e' col='yellow' />
                    <PersonasCard bor='#d69e2e' col='yellow' />

                </Flex>
            </Box>
            <Box>
                <Box marginTop='25px' marginLeft='25px' ><Text textAlign='center' fontSize='35px'>Colaboradores</Text></Box>
                <Flex bg='white' justify='center' direction='row' wrap='wrap' >
                    <PersonasCard bor='#d53f8c' col='pink' />
                    <PersonasCard bor='#d53f8c' col='pink' />
                    <PersonasCard bor='#d53f8c' col='pink' />
                    <PersonasCard bor='#d53f8c' col='pink' />


                </Flex>
            </Box>
            <Box>
                <Box marginTop='25px' marginLeft='25px' ><Text textAlign='center' fontSize='35px'>Encargados de proyecto</Text></Box>
                <Flex bg='white' justify='center' direction='row' wrap='wrap' >
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />
                    <PersonasCard bor='#3685cf' col='blue' />

                </Flex>
            </Box>
        </Box >


    );
}

export default PersonasSite;