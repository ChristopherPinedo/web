import { PortalProps } from '@mui/material'
import React from 'react'

interface portfolioProps {
  data: object
}

const Portfolio : React.FC<portfolioProps> = ({data}) => {
  return (
    <>
      <div>Portafolio</div>
      {console.log(data)}
    </>
  )
}

export {Portfolio}