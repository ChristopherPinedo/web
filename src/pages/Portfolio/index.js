import React from 'react'
import { Box, Container, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { ProjectCard } from './components/ProjectCard'


const Portfolio = ({data}) => {
  return (
    <>
      <Container>
        <Stack
          mt={4}
          gap={4}
          divider={<Divider orientation="horizontal" flexItem /> }
        >
          <Box>
            <Typography variant="h4" component="h2" color="primary.main" >Proyectos</Typography>
            <Typography variant="subtitle1" component="p" color="primary.main" >Fuente: Github</Typography>
          </Box>
          <Stack>
            {data && data.map(ele => (
              <ProjectCard key={ele.id} element={ele} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export {Portfolio}