import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    MY APP
                </Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/'>LOGIN</Link> </Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/sign'>SIGN UP</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to='/sb'>STATE</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/ct'>COUNT</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/lm'>LIST</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/ap'>API</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to='/su'>SAMPLE USE</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/gc'>CARDS</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar