import React from 'react';
import { Card, CardActions, CardContent, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'mui-image'
import ReactWhatsapp from 'react-whatsapp';

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
            Este sitio cumple la función de Portafolio y Curriculum,
            aquí encontraras la recopilación de mis proyectos públicos
            además de información de contacto.
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
                <IconButton
                  target="_blank"
                  children={<WhatsAppIcon/>}
                  component={ReactWhatsapp}
                  number='978544045'
                />
                <IconButton
                  target="_blank"
                  children={<LinkedInIcon/>}
                  href="https://www.linkedin.com/in/christopherpinedo/"
                />
                <IconButton
                  target="_blank"
                  children={<GitHubIcon/>}
                  href="https://github.com/ChristopherPinedo"
                />
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </Container>
  )
}

export {Home}