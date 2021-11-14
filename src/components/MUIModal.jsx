import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
      aria-describedby="modal-login-form"
    >
      <Box sx={style}>
        <form>
          <TextField
            required
            id="email-required"
            label="Email"
            type="email"
          />
          <TextField
            required
            id="password-required"
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
