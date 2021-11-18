import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';
import ChakraArticle from './ChakraArticle';
import useAxios from '../utils/useAxios';

function ChakraArticles() {
  const [data, setData] = useState([]);
  const { response, error, loading } = useAxios();

  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setData(response);
    }
  }, [response]);

  const articles = data.map((article) => {
    return (
      <ChakraArticle
        key={article.id}
        title={article.title}
        body={article.body}
      />
    )
  });

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mt="5"
    >
      <Heading as="h2" size="xl">
        News
      </Heading>
      {loading ? (
        <Text fontSize="md">
          Loading...
        </Text>
      ) : (
        <React.Fragment>
          {error && (
            <Text fontSize="md">
              {error}
            </Text>
          )}
          {articles}
        </React.Fragment>
      )}
    </Flex>
  );
}

export default ChakraArticles;
