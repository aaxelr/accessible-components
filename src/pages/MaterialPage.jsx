import React from 'react';
import Container from '@mui/material/Container';
import MUIArticles from '../components/MUIArticles';
import MUIContactForm from '../components/MUIContactForm';
import MUIFooter from '../components/MUIFooter';
import MUIHeader from '../components/MUIHeader';

function MaterialPage() {
  return (
    <React.Fragment>
      <MUIHeader />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '1rem',
        }}
      >
        <MUIArticles />
        <MUIContactForm />
      </Container>
      <MUIFooter />
    </React.Fragment>
  );
}

export default MaterialPage;
