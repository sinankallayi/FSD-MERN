import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   var [fname,setFname]=useState()
   var[val,setval]=useState()
const submithandler=()=>{
    setFname(val)
}
const handleInput=(e)=>{
    console.log(e.target.value)
    setval(e.target.value)
}    
  return (
    <div>
        <br /><br />
       <Typography variant='h6'>Welcome {fname}</Typography><br /><br />
       <TextField label="Type Your Name" variant="outlined" onChange={handleInput}/><br/><br/>
       <Button variant='contained' onClick={submithandler}>Submit</Button>
    </div>
  )
}

export default StateBasics