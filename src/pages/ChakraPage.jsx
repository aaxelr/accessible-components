import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ChakraHeader from '../components/ChakraHeader';
import ChakraArticles from '../components/ChakraArticles';
import ChakraContactForm from '../components/ChakraContactForm';
import ChakraFooter from '../components/ChakraFooter';

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
