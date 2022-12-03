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
    mode: 'light',
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

  const [fetchData, setFetchData] = useState([])

  useEffect(() => {

    fetch("https://api.github.com/users/ChristopherPinedo/repos")
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(result => {
        console.log(result)
        let obj = result.map((ele: any) => ({
          id: ele.id,
          gh_url: ele.html_url,
          ghpages_url: `https://${ele.owner.login}.github.io/${ele.name}`,
          created_at: ele.created_at,
          main_language: ele.language,
          languages: ele.languages_url,
          name: ele.name,
          owner: ele.owner.login,
          description: ele.description,
        }))
        setFetchData(obj)
        return result
      })
      .catch(error => console.log(error))
  }, [])

  // console.log(fetchData)

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
              <Route path="/portfolio" element={<Portfolio data={fetchData} />} />
              <Route path="/cv" element={<CV />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );

}

export default App;
