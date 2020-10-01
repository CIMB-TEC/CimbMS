import React from "react";
import { Button, Link, SimpleGrid, Text, Stack } from "@chakra-ui/core";
import Image from "@chakra-ui/core/dist/Image";
import Flex from "@chakra-ui/core/dist/Flex";

function NewsCard(props) {
  /*    href='https://github.com/nekonee'*/
  /*    thumbnail='https://i.imgur.com/rLFk5nd.jpg'*/
  /*    title='Polish mountaineers on the top'*/
  /*    date='Feb 2, 2018'*/
  return (
    <SimpleGrid
      columns={2}
      bg="white"
      color="green"
      padding="20px"
      border="1px"
      borderColor={props.bor}
      margin="auto"
    >
      <Image src={props.thumbnail} />
      <Stack paddingLeft={3} flexDirection="column">
        <Text>{props.date}</Text>
        <Link href={props.href} color="black" fontSize="21px">
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
