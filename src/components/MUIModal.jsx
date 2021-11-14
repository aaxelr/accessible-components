import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MUIModal({ openLoginForm, handleOpenLoginForm }) {
  return (
    <Modal
      open={openLoginForm}
      onClose={handleOpenLoginForm}
      aria-labelledby="modal-login"
      aria-describedby="modal-login-desc"
    >
      <Box sx={style}>
        <Typography id="modal-login" variant="h6" component="h3">
          Login
        </Typography>
        <Typography id="modal-login-desc" variant="body" component="p">
          Sign in using your email addres and password.
        </Typography>
        <form>
          <TextField
            required
            id="required-email-input"
            label="Email"
            type="email"
          />
          <TextField
            required
            id="required-password-input"
            label="Password"
            type="password"
          />
          <Button
            variant="contained"
            onClick={handleOpenLoginForm}
          >
            Log in
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default MUIModal;
