import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SampleUse = () => {

    var [x,setx]=useState()

    const reacthandle=()=>{
        setx("REACT")}

    const angularhandle=()=>{
        setx("ANGULAR")}

    const viewhandle=()=>{
        setx("VIEW")

    }

    useEffect(()=>{
        reacthandle();
    },[])

  return (
    <div>
<br /><br />
<Typography variant='h5'> {x}</Typography><br /><br />
<Button variant='contained' color='inherit' onClick={reacthandle}>REACT</Button>&nbsp;&nbsp;
<Button variant='contained' color='error' onClick={angularhandle}>ANGULAR</Button>&nbsp;&nbsp;
<Button variant='contained' color='inherit' onClick={viewhandle}>VIEW</Button>

    </div>
  )
}


export default SampleUse