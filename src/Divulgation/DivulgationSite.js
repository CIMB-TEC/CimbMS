import React, { Component } from "react";
import DivulgationCard from "./DivulgationSiteComponents/DivulgationCard";
import { Box, Stack } from "@chakra-ui/core";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default class DivulgationSite extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Menu />
        <Stack bg="white" padding="20px" spacing={8}>
          <Box>
            {" "}
            <DivulgationCard bor="#d69e2e" col="yellow" />
          </Box>
          <Box>
            {" "}
            <DivulgationCard bor="#d53f8c" col="pink" />
          </Box>
          <Box>
            {" "}
            <DivulgationCard bor="#3685cf" col="blue" />
          </Box>
        </Stack>
        <Footer />
      </Box>
    );
  }
}
