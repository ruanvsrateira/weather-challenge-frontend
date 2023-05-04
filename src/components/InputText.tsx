import { Container, Input, Button } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

interface IInputTextProps {
  onSearch: () => void;
}

export const InputText = ({ onSearch }: IInputTextProps) => {
  return (
    <Container
      display="flex"
      alignItems="center"
      background="white"
      width={["90%", "100%"]}
      height="50px"
      justifyContent="center"
      gap="10px"
      paddingRight="15px"
      boxShadow={3}
      borderRadius="5px"
      margin="15px auto 50px auto"
    >
      <Input
        w="100%"
        h="50px"
        paddingLeft="15px"
        placeholder="Insira aqui o nome da cidade"
        borderRadius="5px"
      />
      <Button>
        <FaSearch onClick={onSearch} />
      </Button>
    </Container>
  );
};
