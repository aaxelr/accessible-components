import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MUILogin from './MUILogin';

function MUIHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            Material-UI
          </Typography>
          <MUILogin />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MUIHeader;
