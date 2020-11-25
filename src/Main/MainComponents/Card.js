import React from "react";
import { Button, Link, SimpleGrid, Text, Stack } from "@chakra-ui/core";
import Image from "@chakra-ui/core/dist/Image";
import Flex from "@chakra-ui/core/dist/Flex";

import { RiCpuLine } from "react-icons/ri";

function NewsCard(props) {
  /*    href='https://github.com/nekonee'*/
  /*    thumbnail='https://i.imgur.com/rLFk5nd.jpg'*/
  /*    title='Polish mountaineers on the top'*/
  /*    date='Feb 2, 2018'*/
  return (
    <SimpleGrid
      columns={2}
      bg="#222222"
      color="white"
      padding="20px"
      border="2px"
      borderColor={props.bor}
      margin="auto"
     border='3px solid #222222' borderRadius="10px" 
  
    >
      {/* <Image src={props.thumbnail} /> */}
      <RiCpuLine size="150px"/>
      <Stack paddingLeft={3} flexDirection="column">
        <Text>{props.date}</Text>
        <Link href={props.href}  color="white" fontSize="21px">
          {props.title}
        </Link>
        <Button href={props.href} variantColor={props.col} size="md">
          Read More
        </Button>
      </Stack>
    </SimpleGrid>
  );
}

export default NewsCard;
