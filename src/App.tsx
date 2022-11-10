import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Inicio } from './pages/Inicio';
import { Portafolio } from './pages/Portafolio';
import { Curriculum } from './pages/Curriculum';
import { SimpleBottomNavigation } from './pages/Inicio/components/SimpleBottomNavigation';

const baseTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});

function App() {

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  if (matchesSM) {
    return(
      <>
        <p>Small</p>
      </>
    )
  } else if (matchesMD) {
    return(
      <>
        <p>Medium</p>
      </>
    )
  } else {
    return(
      <>
        <p>Bigger than MD</p>
      </>
    )
  }

  // return (
  //   <>
  //     <ThemeProvider theme={baseTheme}>
  //       <CssBaseline/>
  //       <HashRouter>

  //         {/* Navigation bar */}
  //         <SimpleBottomNavigation/>

  //         <Routes>
  //             <Route path="/" element={<Inicio />} />
  //             <Route path="/portafolio" element={<Portafolio />} />
  //             <Route path="/curriculum" element={<Curriculum />} />
  //         </Routes>

  //       </HashRouter>
  //     </ThemeProvider>
  //   </>
  // );
}

export default App;
