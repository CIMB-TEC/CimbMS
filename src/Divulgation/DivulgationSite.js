import React, { Component } from "react";
import DivulgationCard from "./DivulgationSiteComponents/DivulgationCard";
import { Box, Stack } from "@chakra-ui/core";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default class DivulgationSite extends Component {
  render() {
    return (
      <Box bg="#141414">
        <Header />
        {/* <Menu /> */}
        <Stack  padding="20px" spacing={15}>
          <Box >
            {" "}
            <DivulgationCard   bor="#d69e2e" col="yellow" />
          </Box>
          <Box>
            {" "}
            <DivulgationCard  bor="#d53f8c" col="pink" />
          </Box>
          <Box>
            {" "}
            <DivulgationCard  bor="#3685cf" col="blue" />
          </Box>
        </Stack>
        {/* <Footer /> */}
      </Box>
    );
  }
}
