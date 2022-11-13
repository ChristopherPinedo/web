import React from 'react';
import { Card, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Inicio = () => {
  return (
    <Container >
      <Typography variant="h4" component="h1">Christopher Pinedo</Typography>
      <Typography variant="subtitle1" >Frontend Developer</Typography>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
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
      </Card>
    </Container>
  )
}

export {Inicio}