import React from 'react'
import { ProjectCard } from './components/ProjectCard'


const Portfolio = ({data}) => {
  return (
    <>
      <div>Portafolio</div>
      {data && data.map(ele => (
        <ProjectCard key={ele.id} element={ele} />
      ))}
    </>
  )
}

export {Portfolio}