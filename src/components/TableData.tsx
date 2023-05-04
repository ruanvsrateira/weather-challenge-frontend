import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  Container,
} from "@chakra-ui/react";

interface ITableDataProps {
  title: string;
}

export const TableData = ({ title }: ITableDataProps) => {
  return (
    <Container>
      <Text mt="20px" color="white" fontSize="30px" fontWeight="bold">
        {title}
      </Text>
      <Table mt="10px">
        <Thead color="gray.700">
          <Th fontWeight="200">Min</Th>
          <Th fontWeight="200">Max</Th>
          <Th></Th>
        </Thead>
        <Tbody p="10px">
          <Tr fontWeight="bold" color="gray.700" >
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
    </Container>
  );
};
