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
        minHeight={"100vh"}
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
              <Stack
              divider={<Divider orientation="horizontal" flexItem/>}
              spacing={2}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3} >
                    <Image
                      src="https://avatars.githubusercontent.com/u/69333394?v=4"
                    />
                  </Grid>
                  <Grid item xs={9} >
                    <Typography variant="h5" component="h5">Christopher Pinedo</Typography>
                    <Typography variant="subtitle1" >Frontend Developer</Typography>
                  </Grid>
                </Grid>
                <Typography component="div" variant="body1">
                  Desarrollador de Software especializado en Frontend orientado a web usando React.<br/>Me considero una persona proactiva, resiliente y entusiasta por la tecnología que busca aprender constantemente.
                </Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{justifyContent:"space-evenly"}} >
                <IconButton
                  target="_blank"
                  children={<WhatsAppIcon/>}
                  component={ReactWhatsapp}
                  number='+51978544045'
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