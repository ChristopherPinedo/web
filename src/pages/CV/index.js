import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import cv from '../../content/cv.md'
import Container from '@mui/material/Container';
import { CvAppBar } from './components/CvAppBar'
import { Box } from '@mui/material';

const CV = () => {

  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch(cv)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
      <CvAppBar/>
      <Container >
        <Box mb={7}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
        </Box>
      </Container>
    </>
  )
}

export {CV}