import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { ProjectCard } from './components/ProjectCard'


const Portfolio = ({data}) => {
  return (
    <>
      <Container>
        <Stack
          mt={4}
          spacing={4}
          divider={<Divider orientation="horizontal" flexItem /> }
        >
          <Box>
            <Typography variant="h4" component="h2" color="primary.main" >Proyectos</Typography>
            <Typography variant="subtitle1" component="p" color="primary.main" >Fuente: Github</Typography>
          </Box>
          <Grid container>
            {data && data.map(ele => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ProjectCard
                  key={ele.id}
                  element={ele}
                  />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  )
}

export {Portfolio}