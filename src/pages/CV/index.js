import React from 'react'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import cv from '../../content/cv.md'
import Container from '@mui/material/Container';
import { CvAppBar } from './components/CvAppBar'

const CV = () => {

  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    // fetch(cv)
    //   .then((res) => res.text())
    //   .then((text) => setContent(text));
  }, []);

  return (
    <>
      <CvAppBar/>
      <Container >
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} /> */}

      </Container>
    </>
  )
}

export {CV}