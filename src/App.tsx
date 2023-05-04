import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { InputText } from "./components/InputText";
import { TableData } from "./components/TableData";
import { Wrapper } from "./components/Wrapper";

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
          mt="100px"
          fontSize="60px"
          color="white"
          fontWeight="bold"
          textAlign="center"
          mb="50px"
        >
          Previsão do Tempo
        </Text>
        <InputText />
        <Wrapper />
        <TableData title="Capitais" />
      </Box>
    </Container>
  );
}
