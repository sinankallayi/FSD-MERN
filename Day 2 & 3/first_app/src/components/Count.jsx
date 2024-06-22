import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {

    var[count,setval]=useState(0)

    const plushandler=()=>{
        setval(count+1)}

    const minushandler=()=>{
            setval(count-1)
        }

        const handleInput=(e)=>{
            console.log(e.target.value)
            setval(e.target.value)

    }
  return (
    <div>
        <Typography variant='h6'>{count}</Typography><br /><br />
       {/* <TextField label="Type Your Name" variant="outlined" onChange={handleInput}/><br/><br/> */}
       <Button variant='contained' onClick={plushandler}>PLUS</Button>&nbsp;&nbsp;
       <Button variant='contained' onClick={minushandler}>MINUS</Button>

    </div>
  )
}

export default Count