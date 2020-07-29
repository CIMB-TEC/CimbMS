import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Box, Image, Text} from "@chakra-ui/core";
import NewsCard from "../Main/MainComponents/Card";
import Flex from "@chakra-ui/core/dist/Flex";

const styles = {
    center: {
        marginLeft: "auto",
        marginRight: "auto"
    }
}

// Dummy. Will be replaced with Trix editor generated content
let BlogEntry = (content) => {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <Flex flexDirection="column" width="50%" className={styles.center} textAlign={"justify"} >
                <h1 >Canberra is no more, global doom imminent experts say.</h1>
                <Image src="https://picsum.photos/300/200" width="120%"/>
                <Text>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                    nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                    autem
                    vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                    illum
                    qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
                <Image src="https://picsum.photos/200/300" width="120%"/>
                <Text>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                    nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                    autem
                    vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                    illum
                    qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>

                <Flex justifyContent={"space-around"}>
                    <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                              title="Canberra is no more" date="July 20 2020"/>
                    <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                              title="Canberra is no more" date="July 20 2020"/>
                </Flex>

            </Flex>
            <Footer/>
        </div>
    )
}

export default BlogEntry;
