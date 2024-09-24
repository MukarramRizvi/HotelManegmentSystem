import { TextField } from '@mui/material'
import React from 'react'

const Custom_Inputs = (props) => {
  return (
    <div className='custom-input'>
        <TextField {...props}  />
    </div>
  )
}

export default Custom_Inputs