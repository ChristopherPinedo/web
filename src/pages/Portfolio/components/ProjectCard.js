import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { UserProps } from 'myTypes';
import GitHubIcon from '@mui/icons-material/GitHub';


function ProjectCard({element}) {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          children={element.name}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          children={element.description}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="large"
          target="_blank"
          href={element.gh_url}
          children="Codigo"
          startIcon={<GitHubIcon/>}
        />
        <Button
        variant="outlined"
          size="large"
          target="_blank"
          href={element.ghpages_url}
          children="Sitio"
          startIcon={<GitHubIcon/>}
        />
      </CardActions>
    </Card>
  );
}

export { ProjectCard }
