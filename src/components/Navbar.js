import React from 'react';
import Box from "@chakra-ui/core/dist/Box";
import Stack from "@chakra-ui/core/dist/Stack";
import tec from "../img/tec.png";
import cimb from "../img/cimb.png";
import { FormControl, Input, Text } from "@chakra-ui/core";
import Flex from "@chakra-ui/core/dist/Flex";

let navbar = () => {
    return (
        <Flex bg="bacc" h={80} padding={3} justifyContent={"space-between"} alignItems={"center"}>
            <img src={cimb} alt="Logo" height={50} />
            <FormControl>
                <Input placeholder="kiss" size="lg" />
            </FormControl>
            <img src={tec} alt="Logo" height={50} />
        </Flex>
    )
}

export default navbar;