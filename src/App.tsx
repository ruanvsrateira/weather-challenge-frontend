import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { InputText } from "./components/InputText";
import { TableData } from "./components/TableData";
import { Wrapper } from "./components/Wrapper";
import { CountryInformation } from "./components/CountryInformation";

export default function App() {
  return (
    <Container
      width="100%"
      height="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box>
        <Text
          mt="70px"
          fontSize="60px"
          color="white"
          fontWeight="bold"
          textAlign="center"
        >
          Previsão do Tempo
        </Text>
        <CountryInformation />
        <InputText />
        <Wrapper color="white" />
        <TableData title="Capitais" />
      </Box>
    </Container>
  );
}
