import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {

    var[inp,setinp]=useState(["ICTAK"])
    var[data,setdata]=useState("")

    const inputhandle=(e)=>{
        setdata(e.target.value)
    }

    const add=()=>{
        setinp([...inp,data])
        console.log(inp)
        setdata("")
    }

  return (
    <div>
        <br /><br />
        <TextField label="Type Name" variant="outlined" onChange={inputhandle} value={data}/><br/><br/>
        <Button variant='contained' onClick={add}>LIST</Button>
        <ul>
        {inp.map((v,i)=>{
            return <li>{v}</li>
        })}
        </ul>
        {/* <Typography variant='h6'>{count}</Typography><br /><br /> */}
    </div>
  )
}

export default Listmap