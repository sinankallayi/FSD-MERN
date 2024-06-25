import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
      <br /><br />
        <Typography variant='h5'>Blog Form</Typography><br />
        <TextField label="Name" variant="outlined" /><br /><br />
        <TextField label="Description" variant="outlined" /><br /><br />
        <TextField label="Author_Name" variant="outlined" /><br /><br />
        <Button variant="contained" color='secondary'>Submit</Button>

    </div>
  )
}

export default Addblog