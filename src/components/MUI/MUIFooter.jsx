import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function MUIFooter() {
  return (
    <Box
      bgcolor="primary.main"
      sx={{ flexGrow: 1, }}
      p={5}
      color="#fff"
    >
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h3">
            About
          </Typography>
          <Typography variant="body" component="p">
            Testing MUI components' accessibility.
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h3">
            Links
          </Typography>
          <List>
            <ListItem>
              <Link
                href="https://mui.com/"
                color="inherit"
              >
                Material-UI
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                color="inherit"
              >
                W3C Web Accessibility Initiative
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://wave.webaim.org/"
                color="inherit"
              >
                Wave Web Accessibility Evaluation Tool
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h5" component="h3">
            Contact
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6" component="h4">
                Email:
              </Typography>
              <Typography variant="body2" component="p">
                test@mail.com
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" component="h4">
                Phone Number:
              </Typography>
              <Typography variant="body2" component="p">
                1-800-WEBAIM
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" component="h4">
                Website:
              </Typography>
              <Link
                href="https://github.com/aaxelr"
                color="inherit"
              >
                aaxelr
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid >
    </Box >
  );
}

export default MUIFooter;
