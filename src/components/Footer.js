import React from 'react';
import Box from "@chakra-ui/core/dist/Box";
import Stack from "@chakra-ui/core/dist/Stack";
import tec from "../img/tec.png";
import cimb from "../img/cimb.png";
import {Text} from "@chakra-ui/core";

let footer = () => {
   return(
       <Box bg="bacc" h={400}>
            <Stack maxWidth="30%" spacing={5} padding={5}>
                <img src={cimb} alt="Logo" width={200}/>
               <Text color="text">
                   CEDETEC 3er piso <br/>
                   Calle del Puente #222 <br/>
                   Col. Ejidos de Huipulco, <br/>
                   Tlalpan C.P. 14380, México D.F.
               </Text>
                <img src={tec} alt="Logo" width={130}/>
            </Stack>
       </Box>
   )
}

export default footer;
