import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function ChakraFooter() {
  return (
    <Flex bg="blue.500" color="white" p="5">
      <Box>
        <Heading as="h3" size="lg">About</Heading>
        <Text>Testing Chakra UI components' accessibility.</Text>
      </Box>
      <Spacer />
      <Box>
        <Heading as="h3" size="lg">Links</Heading>
        <UnorderedList>
          <ListItem>
            <Link
              href="https://chakra-ui.com/"
              isExternal
            >
              Chakra UI
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.w3.org/WAI/standards-guidelines/wcag/" isExternal
            >
              W3C Web Accessibility Initiative
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://wave.webaim.org/"
              isExternal
            >
              Wave Web Accessibility Evaluation Tool
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Spacer />
      <Box>
        <Heading as="h3" size="lg">Contact</Heading>
        <Heading as="h4" size="md">Email:</Heading>
        <Link href="test@mail.com">test@mail.com</Link>
        <Heading as="h4" size="md">Phone Number:</Heading>
        <Text>1-800-WEBAIM</Text>
        <Heading as="h4" size="md">Website:</Heading>
        <Link href="https://github.com/aaxelr">aaxelr</Link>
      </Box>
    </Flex>
  );
}

export default ChakraFooter;
