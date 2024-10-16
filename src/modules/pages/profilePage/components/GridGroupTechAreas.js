/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  SvgIcon,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { useEffect, useState } from 'react';
import { projectsInfo } from '../../../../resources/data/projectsInfo';
import { Link as RouterLink } from 'react-router-dom';

function GridTechAreas({ element }) {
  return (
    <Grid item key={element.id} xs={6} sm={4} lg={3}>
      <Card
        sx={{ height: 1, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box width={1}>
            <Stack width={1} pb={1} gap={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {element.name}
              </Typography>
              {element.state.icon}
            </Stack>
            <Divider flexItem orientation="horizontal" />
          </Box>
          <Box
            sx={{
              borderRadius: 25,
              width: 80,
              height: 80,
              backgroundColor: element.colorLayer1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <SvgIcon sx={{ width: 40, height: 40, color: element.colorLayer2 }}>{element.icon}</SvgIcon>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2, paddingTop: 0 }}>
          <Button
            disabled={!element.hasProjects}
            component={RouterLink}
            to={`/projects/:${element.id}`}
            endIcon={<OpenInBrowserIcon />}
            variant="outlined"
            fullWidth
            // size="small"
          >
            View projects
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

function GridGroupTechAreas({ area, technologies, checkedObj }) {
  const [filteredTechs, setFilteredTechs] = useState([]);

  useEffect(() => {
    const techlist = {};
    let techListByArea = [];
    Object.entries(technologies).forEach(([key, value]) => {
      techlist[key] = {
        ...value,
        hasProjects: projectsInfo.some((project) =>
          project.content.technologies.some((projectTech) => projectTech.name === value.name)
        )
      };
    });
    techListByArea = Object.values(techlist).filter((e) => e.area === area);
    setFilteredTechs(techListByArea);
  }, [projectsInfo, technologies]);

  // useEffect(() => console.log(filteredTechs), [filteredTechs]);

  return (
    <>
      <Stack gap={2}>
        <Card
          sx={{
            borderRadius: 2,
            padding: 2,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Stack
            gap={2}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={{ xs: 1, sm: 'inherit' }}
          >
            <Typography variant="h5">{area.toLocaleUpperCase()}</Typography>
            <Chip label={filteredTechs.length} />
          </Stack>
          <Stack
            direction={'row'}
            gap={2}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={{ xs: 1, sm: 'inherit' }}
            divider={<Divider flexItem orientation="vertical" />}
          >
            <Typography variant="subtitle2">Estados</Typography>
            <Stack flexGrow={1} direction={'row'} gap={2} flexWrap={'wrap'} justifyContent={'flex-end'}>
              {Object.entries(checkedObj).map(
                (ele, i) => ele[1] === true && <Chip key={i} label={ele[0].toLocaleUpperCase()} />
              )}
            </Stack>
          </Stack>
        </Card>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* {area === 'All'
            ? Object.values(filteredTechs).map((ele) => <GridTechAreas key={ele.id} element={ele} />)
            : Object.values(filteredTechs)
                .filter((e) => e.area === area)
                .map((ele) => <GridTechAreas key={ele.id} element={ele} />)
          } */}
          {filteredTechs.map((ele) => (
            <GridTechAreas key={ele.id} element={ele} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export { GridGroupTechAreas };
