import { Container, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
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
          <Typography variant="h4" component="h2" color="primary.main" >Proyectos</Typography>
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