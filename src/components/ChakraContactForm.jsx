import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';

function ChakraContactForm() {
  return (
    <Center>
      <Box p="5" minW="md" maxW="xl">
        <Heading as="h2" size="xl" textAlign="center">Contact</Heading>
        <form>
          <FormControl id="name" m="5">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormHelperText>
              Enter full name.
            </FormHelperText>
          </FormControl>
          <FormControl id="email" m="5">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormHelperText>
              Enter your email address.
            </FormHelperText>
          </FormControl>
          <FormControl id="message" m="5">
            <FormLabel>Comment</FormLabel>
            <Textarea />
            <FormHelperText>
              Enter your comment.
            </FormHelperText>
          </FormControl>
          <Button m="3">Send</Button>
        </form>
      </Box>
    </Center>
  );
}

export default ChakraContactForm;
