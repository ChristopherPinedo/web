import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import cvpdf from '../../../content/cv.pdf'

function CvAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Curriculum
          </Typography>
          <Button variant='contained' endIcon={<DownloadIcon/> } download href={cvpdf} > Descargar </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { CvAppBar }