import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';
import { Grid } from '@mui/material';

function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Grid container>
              <Grid
                item
                sm={4}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Web - Christopher Pinedo
                </Typography>
              </Grid>
              <Grid
                item
                sm={8}
                display="flex"
                justifyContent="flex-end"
                gap={2}
              >
              <Button component={NavLink} startIcon={<HomeIcon/>} to="/" color="inherit">Inicio</Button>
              <Button component={NavLink} startIcon={<WorkIcon/>} to="/portfolio" color="inherit">Portafolio</Button>
              <Button component={NavLink} startIcon={<AssignmentIndIcon/>} to="/cv" color="inherit">Curriculum</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export { MainAppBar }