import { Box, Container, Text } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Wrapper } from "./Wrapper";

interface ICountryInformationProps {
  onClose: () => void;
}

export const CountryInformation = ({ onClose }: ICountryInformationProps) => {
  return (
    <Container
      width={["100%", "90%"]}
      margin="auto"
      bg="white"
      mt={["10px", "25px"]}
      p={["20px", "15px"]}
      display="flex"
      flexDir="column"
      gap="20px"
    >
      <Container display="flex" justifyContent="space-between">
        <Text fontWeight="semibold" color="gray.800">
          Niterói, RJ - Brasil
        </Text>
        <IoMdClose
          size="25px"
          color="orange"
          onClick={onClose}
          cursor="pointer"
        />
      </Container>

      <Text color="gray.600" fontSize={["40", "50px"]} fontWeight="bold">
        20°C Dublado
      </Text>

      <Box display="flex" flexDir="column" gap="20px">
        <Container display="flex" gap="20px">
          <Container display="flex" color="gray.600" fontWeight="bold">
            <FaArrowDown size="20px" color="orange" />
            16°
          </Container>
          <Container display="flex" color="gray.600" fontWeight="bold">
            <FaArrowUp size="20px" color="orange" />
            16°
          </Container>
          <Container display="flex">
            <Text fontWeight="200">Sensação:</Text>
            <Text color="gray.600" fontWeight="bold">
              19°C
            </Text>
          </Container>
        </Container>
        <Container display="flex" gap="20px">
          <Container display="flex">
            <Text fontWeight="200">Vento:</Text>
            <Text color="gray.600" fontWeight="bold">
              18Km/h
            </Text>
          </Container>
          <Container display="flex">
            <Text fontWeight="200">Humidade:</Text>
            <Text color="gray.600" fontWeight="bold">
              89%
            </Text>
          </Container>
        </Container>
      </Box>
      <Wrapper color="orange" />
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container display="flex" flexDir="column" alignItems="center">
          <Text color="gray.600" fontWeight="bold" fontSize={["15px", "20px"]}>
            Segunda
          </Text>
          <Container display="flex" gap="15px">
            <Text color="orange" fontSize="13px" fontWeight="bold">
              18°C
            </Text>
            <Text color="orange" fontSize="13px" fontWeight="bold">
              26°C
            </Text>
          </Container>
        </Container>
        <Container display="flex" flexDir="column" alignItems="center">
          <Text color="gray.600" fontWeight="bold" fontSize={["15px", "20px"]}>
            Terça
          </Text>
          <Container display="flex" gap="15px">
            <Text color="orange" fontSize="13px" fontWeight="bold">
              18°C
            </Text>
            <Text color="orange" fontSize="13px" fontWeight="bold">
              26°C
            </Text>
          </Container>
        </Container>
        <Container display="flex" flexDir="column" alignItems="center">
          <Text color="gray.600" fontWeight="bold" fontSize={["15px", "20px"]}>
            Quarta
          </Text>
          <Container display="flex" gap="15px">
            <Text color="orange" fontSize="13px" fontWeight="bold">
              18°C
            </Text>
            <Text color="orange" fontSize="13px" fontWeight="bold">
              26°C
            </Text>
          </Container>
        </Container>
        <Container display="flex" flexDir="column" alignItems="center">
          <Text color="gray.600" fontWeight="bold" fontSize={["15px", "20px"]}>
            Quinta
          </Text>
          <Container display="flex" gap="15px">
            <Text color="orange" fontSize="13px" fontWeight="bold">
              18°C
            </Text>
            <Text color="orange" fontSize="13px" fontWeight="bold">
              26°C
            </Text>
          </Container>
        </Container>
        <Container display="flex" flexDir="column" alignItems="center">
          <Text color="gray.600" fontWeight="bold" fontSize={["15px", "20px"]}>
            Sexta
          </Text>
          <Container display="flex" gap="15px">
            <Text color="orange" fontSize="13px" fontWeight="bold">
              18°C
            </Text>
            <Text color="orange" fontSize="13px" fontWeight="bold">
              26°C
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
