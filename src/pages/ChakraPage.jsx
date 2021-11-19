import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ChakraHeader from '../components/Chakra/ChakraHeader';
import ChakraArticles from '../components/Chakra/ChakraArticles';
import ChakraContactForm from '../components/Chakra/ChakraContactForm';
import ChakraFooter from '../components/Chakra/ChakraFooter';

function ChakraPage() {
  return (
    <ChakraProvider>
      <ChakraHeader />
      <ChakraArticles />
      <ChakraContactForm />
      <ChakraFooter />
    </ChakraProvider>
  );
}

export default ChakraPage;
