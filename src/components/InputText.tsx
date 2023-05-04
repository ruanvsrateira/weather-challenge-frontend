import { Container, Input, Button } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

export const InputText = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      background="white"
      width={["90%", "500px"]}
      height="50px"
      justifyContent="center"
      gap="10px"
      paddingRight="15px"
      boxShadow={3}
      borderRadius="5px"
      margin="0 auto 50px auto"
    >
      <Input
        w="100%"
        h="50px"
        paddingLeft="15px"
        placeholder="Insira aqui o nome da cidade"
        borderRadius="5px"
      />
      <Button>
        <FaSearch />
      </Button>
    </Container>
  );
};
