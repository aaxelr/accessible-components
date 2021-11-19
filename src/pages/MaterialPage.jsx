import React from 'react';
import Container from '@mui/material/Container';
import MUIArticles from '../components/MUI/MUIArticles';
import MUIContactForm from '../components/MUI/MUIContactForm';
import MUIFooter from '../components/MUI/MUIFooter';
import MUIHeader from '../components/MUI/MUIHeader';

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
