import React from "react";
import {
  Container,
  Text,
  Input,
  Box,
  Button,
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

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
          fontSize="40px"
          color="white"
          fontWeight="bold"
          textAlign="center"
          mb="50px"
        >
          Previsão do Tempo
        </Text>
        <Container
          display="flex"
          alignItems="center"
          background="white"
          width={["90%", "500px"]}
          height="50px"
          justifyContent="center"
          gap="10px"
          padding="15px"
          boxShadow={3}
          borderRadius="5px"
          mb="50px"
        >
          <Input w="100%" h="50px" placeholder="Insira aqui o nome da cidade" />
          <Button>
            <FaSearch />
          </Button>
        </Container>
        <Box w="500px" h="1px" background="white"></Box>
        <Text
          mt="20px"
          ml="15%"
          color="white"
          fontSize="30px"
          fontWeight="bold"
        >
          Capitais
        </Text>
        <Table ml="15%" cellPadding="5px">
          <Thead color="gray.700" fontWeight="200">
            <Th fontWeight="200">Min</Th>
            <Th fontWeight="200">Max</Th>
            <Th></Th>
          </Thead>
          <Tbody>
            <Tr fontWeight="bold" color="gray.700">
              <Td>18°</Td>
              <Td>20°</Td>
              <Td>Rio de Janeiro</Td>
            </Tr>
            <Tr fontWeight="bold" color="gray.700">
              <Td>18°</Td>
              <Td>20°</Td>
              <Td>Minas Gerais</Td>
            </Tr>
            <Tr fontWeight="bold" color="gray.700">
              <Td>18°</Td>
              <Td>20°</Td>
              <Td>Goiânia</Td>
            </Tr>
            <Tr fontWeight="bold" color="gray.700">
              <Td>18°</Td>
              <Td>20°</Td>
              <Td>São Paulo</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
