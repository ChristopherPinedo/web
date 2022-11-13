import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import curriculum from '../../content/curriculum.md'

const Curriculum = () => {

  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch(curriculum)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
  )
}

export {Curriculum}