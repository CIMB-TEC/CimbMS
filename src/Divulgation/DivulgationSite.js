import React, {Component} from 'react';
import DivulgationCard from "./DivulgationSiteComponents/DivulgationCard"
import { Stack, Box } from "@chakra-ui/core"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class DivulgationSite extends Component {
    render() {
        return (
            <Stack bg="#1a1a1a" padding="20px" spacing={8}>


                <Box> <DivulgationCard /></Box>
                <Box> <DivulgationCard /></Box>
                <Box> <DivulgationCard /></Box>

            </Stack>


        )

    }

}