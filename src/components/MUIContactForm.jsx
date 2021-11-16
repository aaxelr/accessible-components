import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function MUIContactForm() {
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
        Contact
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="contact-form-name-input"
          label="Name"
          type="text"
          placeholder="Your Name"
          maxRows={4}
        />
        <TextField
          id="contact-form-email-input"
          label="Email"
          placeholder="em@il.com"
          multiline
        />
        <TextField
          id="contact-form-comment-input"
          label="Comment"
          placeholder="Your comment here..."
          multiline
          rows={4}
          fullWidth
        />
      </Box>
    </Container>
  );
}

export default MUIContactForm;
