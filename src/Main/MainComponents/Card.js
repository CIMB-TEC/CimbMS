import React from 'react';
import {Button, Link, SimpleGrid, Text,} from "@chakra-ui/core";
import Image from "@chakra-ui/core/dist/Image";
import Flex from "@chakra-ui/core/dist/Flex";


function NewsCard(props) {
    /*    href='https://github.com/nekonee'*/
    /*    thumbnail='https://i.imgur.com/rLFk5nd.jpg'*/
    /*    title='Polish mountaineers on the top'*/
    /*    date='Feb 2, 2018'*/
    return (
        <SimpleGrid columns={[6, 6]} bg="grey" color="green" padding="20px" width="20em">
            <Image src={props.thumbnail} height="6em"/>
            <Flex paddingLeft={3} flexDirection="column">
                <Text>{props.date}</Text>
                <Link href={props.href} color="#75de45" fontSize="21px">{props.title}</Link>
                <Button href={props.href} variantColor="green" size="md">Read More</Button>
            </Flex>
        </SimpleGrid>
    )
        ;
}


export default NewsCard;
