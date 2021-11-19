import React from 'react';
import {
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react"
import ChakraModal from './ChakraModal';

function ChakraLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Center m="3">
        <Button colorScheme="pink" onClick={onOpen}>Log in</Button>
      </Center>
      <ChakraModal 
        isOpen={isOpen}
        onClose={onClose}
      />
    </React.Fragment>
  );
}

export default ChakraLogin;
