import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MUIArticle from './MUIArticle';
import useAxios from '../utils/useAxios';

function MUIArticles() {
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
      <MUIArticle
        key={article.id}
        title={article.title}
        body={article.body}
      />
    )
  });

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <Typography variant="h4" component="h2">
        News
      </Typography>
      {loading ? (
        <Typography variant="body" component="p">
          Loading...
        </Typography>
      ) : (
        <React.Fragment>
          {error && (
            <Typography variant="body" component="p">
              {error}
            </Typography>
          )}
          {articles}
        </React.Fragment>
      )}
    </Container>
  );
}

export default MUIArticles;
