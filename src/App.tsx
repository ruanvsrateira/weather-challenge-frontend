import React, { useState } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { InputText } from "./components/InputText";
import { TableData } from "./components/TableData";
import { Wrapper } from "./components/Wrapper";
import { CountryInformation } from "./components/CountryInformation";

export default function App() {
  const [showContryInformation, setShowCuntryInformation] = useState<boolean>(
    false
  );

  async function handleSearchCountry(countryName: string) {
    setShowCuntryInformation(true);
    const apiKey = "678a7246bb5a412ab09123311230405";

    await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${countryName}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleCloseCountryInformation() {
    setShowCuntryInformation(false);
  }

  return (
    <Container
      minHeight="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box width={["100%", "auto"]}>
        <Text
          fontSize={["40px ", "60px"]}
          color="white"
          mb={showContryInformation ? "" : ["0px", "50px"]}
          fontWeight="bold"
          textAlign="center"
        >
          Previsão do Tempo
        </Text>
        {showContryInformation && (
          <CountryInformation onClose={handleCloseCountryInformation} />
        )}
        <InputText onSearch={handleSearchCountry} />
        <Wrapper color="white" />
        <TableData title="Capitais" />
      </Box>
    </Container>
  );
}
