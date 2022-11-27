import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'mui-image'

const Home = () => {
  return (
    <Container >
      <Stack
        marginTop={4}
        divider={<Divider orientation="horizontal" flexItem />}
        gap={4}
      >
        <Box >
          <Typography variant="h4" component="h2" mb={2} color="primary.main" >Bienvenido</Typography>
          <Typography variant="subtitle1">
            Este sitio cumple la función de Curriculum y Portafolio,
            aqui encontraras mi información de contacto y la recopilación
            de mis proyectos públicos.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" component="h2" mb={2} color="primary.main" >Sobre mi</Typography>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h5">Christopher Pinedo</Typography>
              <Typography variant="subtitle1" mb={2} >Frontend Developer</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/69333394?v=4"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography component="div" variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{justifyContent:"space-evenly"}} >
                <IconButton target="_blank" children={<WhatsAppIcon/>}/>
                <IconButton target="_blank" children={<LinkedInIcon/>}/>
                <IconButton target="_blank" children={<GitHubIcon/>}/>
            </CardActions>
          </Card>
        </Box>
      </Stack>
      {/* <Card sx={{ display: 'flex' }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <CardContent
            sx={{ flex: '1 0 auto' }}
            >
            <Typography component="div" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </CardContent>
          <Box
            sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          >
            <IconButton>
              <WhatsAppIcon/>
            </IconButton>
            <IconButton>
              <LinkedInIcon/>
            </IconButton>
            <IconButton>
              <GitHubIcon/>
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://avatars.githubusercontent.com/u/69333394?v=4"
          alt="Github profile image"
        />
      </Card> */}
    </Container>
  )
}

export {Home}