import { Box, Button, ButtonGroup, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function ChakraArticle({ title, body }) {
  return (
    <Box maxW="xl" borderWidth="1px" m="3">
      <Image
        src="https://picsum.photos/600/200"
        alt="lorem picsum"
      />
      <Box p="3">
      <Heading as="h3" size="lg">{title}</Heading>
      <Text>{body}</Text>
      <ButtonGroup variant="outline" spacing="5" p="3">
        <Button>Share</Button>
        <Button>Learn more</Button>
      </ButtonGroup>
      </Box>
    </Box>
  );
}

export default ChakraArticle;
