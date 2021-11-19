import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ChakraHeader from '../components/ChakraHeader';
import ChakraArticles from '../components/ChakraArticles';
import ChakraContactForm from '../components/ChakraContactForm';

function ChakraPage() {
  return (
    <ChakraProvider>
      <ChakraHeader />
      <ChakraArticles />
      <ChakraContactForm />
    </ChakraProvider>
  );
}

export default ChakraPage;
