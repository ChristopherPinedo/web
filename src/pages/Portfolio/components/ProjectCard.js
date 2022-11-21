import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { UserProps } from 'myTypes';

function ProjectCard({element}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" href={element.gh_url}>View Code</Button>
        <Button size="large" href={element.ghpages_url}>Visit Site</Button>
      </CardActions>
    </Card>
  );
}

export { ProjectCard }
