import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MUIModal from './MUIModal';

function MUILogin() {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const handleOpenLoginForm = () => {
    setOpenLoginForm((prevState) => !prevState);
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenLoginForm}
      >
        Login
      </Button>
      <MUIModal
        handleOpenLoginForm={handleOpenLoginForm}
        openLoginForm={openLoginForm}
      />
    </React.Fragment>
  );
}

export default MUILogin;
