import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';

import { NavLink } from 'react-router-dom';

function MainBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "appBar"
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/"
          label="Inicio"
          icon={<HomeIcon fontSize="large"/>}
        />
        <BottomNavigationAction
          component={NavLink}
          to="/portfolio"
          label="Portafolio"
          icon={<WorkIcon fontSize="large"/>}
        />
        <BottomNavigationAction
          component={NavLink}
          to="/cv"
          label="Curriculum"
          icon={<AssignmentIndIcon fontSize="large"/>}
        />
      </BottomNavigation>
    </Box>
  );
}

export { MainBottomNavigation }