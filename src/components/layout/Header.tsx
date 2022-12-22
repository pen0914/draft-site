import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { VFC, memo } from "react";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as="nav" bg="green" padding="15px 0">
        <Flex
          align="center"
          display="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
        >
          <Link>O</Link>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            デモサイト
          </Heading>
          <Link>O</Link>
        </Flex>
      </Flex>
    </>
  );
});
