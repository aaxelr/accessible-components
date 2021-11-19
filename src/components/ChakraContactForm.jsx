import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react';

function ChakraContactForm() {
  return (
    <Center>
      <Box p="5" minW="md" maxW="xl">
        <form>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormHelperText>
              Enter full name.
            </FormHelperText>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormHelperText>
              Enter your email address.
            </FormHelperText>
          </FormControl>
          <FormControl id="message">
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
