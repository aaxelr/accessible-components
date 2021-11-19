import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import ChakraLogin from './ChakraLogin';

function ChakraHeader() {
  return (
    <Flex bg="blue.500" color="white">
      <Box p="3">
        <Heading as="h1" size="2xl">Chakra UI</Heading>
      </Box>
      <Spacer />
      <ChakraLogin />
    </Flex>
  );
}

export default ChakraHeader;
