import { TextField,Button, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br /><br />
        <Typography variant='h5'><b>Login</b></Typography><br /><br />
        <TextField label="Username" variant="outlined" /><br/><br/>
        <TextField label="Password" variant="outlined" /><br /><br />
        <Button variant="contained">Login</Button>
    </div>
  )
}

export default Register