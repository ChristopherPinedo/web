import React, { useEffect, useState } from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { CV } from './pages/CV';
import { MainBottomNavigation } from './components/MainBottomNavigation';
import { MainAppBar } from './components/MainAppBar';

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

  const [data, setData] = useState([])

  useEffect(() => {

    fetch("https://api.github.com/users/ChristopherPinedo/repos")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        let obj = result.map((ele: any) => ({
          url: ele.html_url,
          ghpages_url: `https://${ele.owner}.github.io/${ele.name}`,
          created_at: ele.created_at,
          main_language: ele.language,
          languages: ele.languages_url,
          name: ele.name,
          owner: ele.owner.login,
        }))
        setData(obj)
        return result
      })
      .catch(error => console.log(error))
  }, [])

  console.log(data)

  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline/>
        <HashRouter>

          {/* Navigation bar */}
          {matchesSM
            ? <MainBottomNavigation/>
            : <MainAppBar/>}

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio data={data} />} />
              <Route path="/cv" element={<CV />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );

}

export default App;
