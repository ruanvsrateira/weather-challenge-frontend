import { Box } from "@chakra-ui/react";

type Colors = "orange" | "white";

interface IWrapperProps {
  color: Colors;
}

export const Wrapper = ({ color }: IWrapperProps) => {
  return (
    <Box w={["100%", "80%"]} h="1px" background={color} margin="auto"></Box>
  );
};
