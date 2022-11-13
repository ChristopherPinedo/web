import React, { useEffect, useState } from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Inicio } from './pages/Inicio';
import { Portafolio } from './pages/Portafolio';
import { Curriculum } from './pages/Curriculum';
import { SimpleBottomNavigation } from './components/SimpleBottomNavigation';
import ButtonAppBar from './components/ButtonAppBar';

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

  useEffect(() => {

    fetch("https://api.github.com/users/ChristopherPinedo/repos")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        let obj = result.map((ele: any) => ({
          url: ele.html_url,
          created_at: ele.created_at,
          language: ele.language,
          name: ele.name,
        }))
        console.log(obj)
        return result
      })
      .catch(error => console.log(error))

  }, [])

  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline/>
        <HashRouter>

          {/* Navigation bar */}
          {matchesSM
            ? <SimpleBottomNavigation/>
            : <ButtonAppBar/>}

          <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/portafolio" element={<Portafolio />} />
              <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );

}

export default App;
