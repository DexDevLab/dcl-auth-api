import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

export function StyleButton({mt, type, buttonText}) {
  return (
    <>
      <Button mt={mt} colorScheme="teal" type={type}>
            {buttonText}
        </Button>
    </>
  );
}
