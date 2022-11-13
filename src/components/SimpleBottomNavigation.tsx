import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
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
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={NavLink}
          to="curriculum"
          label="Curriculum"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={NavLink}
          to="portafolio"
          label="Portafolio"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export {SimpleBottomNavigation}