import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";
const Header = () => (
  <div>
    {/* <VStack> */}
    <Container px={50} py={20} bg={"#11212F"}>
      <Flex align="center">
        <Box>
          <Heading color={"#fff"}>Prime Video</Heading>
        </Box>
        <Box ml={80}>
          <List display={"flex"}>
            <ListItem
              cursor={"pointer"}
              _hover={{
                opacity: 1,
              }}
              px={12}
              transform={0.5}
              opacity={0.8}
            >
              Home
            </ListItem>
            <ListItem
              _hover={{
                opacity: 1,
              }}
              px={12}
              cursor={"pointer"}
              transform={0.5}
              opacity={0.8}
            >
              Store
            </ListItem>
            <ListItem
              _hover={{
                opacity: 1,
                transition: 0.5,
              }}
              cursor={"pointer"}
              px={12}
              transform={0.5}
              opacity={0.8}
            >
              Channels
            </ListItem>
            <ListItem
              _hover={{
                opacity: 1,
                transition: 0.5,
              }}
              cursor={"pointer"}
              px={12}
              transform={0.5}
              opacity={0.8}
            >
              Categories
            </ListItem>
            <ListItem
              _hover={{
                opacity: 1,
                transition: 0.5,
              }}
              cursor={"pointer"}
              px={12}
              transform={0.5}
              opacity={0.8}
            >
              My Stuff
            </ListItem>
          </List>
          {/* <Flex> */}

          {/* </Flex> */}
        </Box>
      </Flex>
    </Container>
    {/* </VStack> */}
  </div>
);

export default Header;
