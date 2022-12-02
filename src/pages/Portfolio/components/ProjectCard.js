import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { UserProps } from 'myTypes';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Chip, Divider } from '@mui/material';
import { Box } from '@mui/system';

function ProjectCard({element}) {

  const [Langs, setLangs] = React.useState({})

  React.useEffect(() => {
    fetch(element.languages)
      .then(response => response.json())
      .then(result => {setLangs(result)})
      .catch(error => console.log(error))
  }, [])

  console.log(Langs)

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          children={element.name}
        />
        <Typography
          variant="body1"
          color="text.secondary"
          children={ `Creado el ${new Date(element.created_at).toLocaleString()}`}
        />
        <Divider sx={{marginTop: 2, marginBottom:2}} />
        <Typography
          variant="body2"
          color="text.secondary"
          children={element.description}
        />
        <Box
        sx = {{
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
        }}>
          {Object.entries(Langs).map( ele => <Chip label={ele[0]} />)}
        </Box>
      </CardContent>
      <CardActions
        sx = {{
          padding: 2,
          paddingTop: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          fullWidth
          size="large"
          target="_blank"
          href={element.gh_url}
          children="Codigo"
          startIcon={<GitHubIcon/>}
        />
        <Button
          variant="outlined"
          fullWidth
          size="large"
          target="_blank"
          href={element.ghpages_url}
          children="Sitio"
          startIcon={<OpenInBrowserIcon/>}
        />
      </CardActions>
    </Card>
  );
}

export { ProjectCard }
