import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

export function Header() {
  return (
    <>
      <Flex bg="pink.900" p="2">
        <Box p="2">
          <Heading size="md">DexCraft Launcher</Heading>
        </Box>
        <Spacer />
        {/* <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box> */}
      </Flex>
    </>
  );
}
