import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ChakraHeader from '../components/ChakraHeader';
import ChakraArticles from '../components/ChakraArticles';

function ChakraPage() {
  return (
    <ChakraProvider>
      <ChakraHeader />
      <ChakraArticles />
    </ChakraProvider>
  );
}

export default ChakraPage;
