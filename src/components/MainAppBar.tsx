import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button component={NavLink} to="/" color="inherit">Home</Button>
          <Button component={NavLink} to="/cv" color="inherit">CV</Button>
          <Button component={NavLink} to="/portfolio" color="inherit">Portfolio</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { MainAppBar }